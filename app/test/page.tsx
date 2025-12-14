"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { QUESTIONS } from "@/lib/questions"
import { calculateScore, determineType } from "@/lib/logic"

// --- Helper: Interleave Questions ---
function getInterleavedQuestions() {
  const R = QUESTIONS.filter((q) => q.type === "R")
  const I = QUESTIONS.filter((q) => q.type === "I")
  const M = QUESTIONS.filter((q) => q.type === "M")
  const O = QUESTIONS.filter((q) => q.type === "O")
  const B = QUESTIONS.filter((q) => q.type === "B")

  const interleaved = []
  const max = Math.max(R.length, I.length, M.length, O.length)

  for (let i = 0; i < max; i++) {
    if (R[i]) interleaved.push(R[i])
    if (M[i]) interleaved.push(M[i])
    if (I[i]) interleaved.push(I[i])
    if (O[i]) interleaved.push(O[i])
  }

  return [...interleaved, ...B]
}

// --- Helper: Subtext Map ---
function getSubtext(type: string) {
  switch (type) {
    case "R":
      return "당신과 AI의 관계에 대해 생각해보세요."
    case "I":
      return "AI를 사용하는 당신의 태도를 떠올려보세요."
    case "M":
      return "평소 프롬프트를 입력하는 습관을 생각해보세요."
    case "O":
      return "정보 공유와 보안에 대한 생각을 알려주세요."
    case "B":
      return "마지막으로, 당신의 상황을 체크해보세요."
    default:
      return "다음 질문에 답해주세요."
  }
}

const questionsPerPage = [8, 8, 8, 6]

export default function SurveyQuestion() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const allQuestions = useMemo(() => {
    const rawQuestions = getInterleavedQuestions()
    return rawQuestions.map((q) => ({
      ...q,
      text: q.question,
      subtext: getSubtext(q.type),
    }))
  }, [])

  const startIndex = questionsPerPage.slice(0, currentPage).reduce((sum, count) => sum + count, 0)
  const currentPageQuestions = allQuestions.slice(startIndex, startIndex + questionsPerPage[currentPage])

  const totalQuestions = 30
  const answeredCount = Object.keys(answers).length
  const progress = (answeredCount / totalQuestions) * 100

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleContinue = () => {
    if (currentPage < questionsPerPage.length - 1) {
      setCurrentPage((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      finishTest()
    }
  }

  const finishTest = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      const scores = calculateScore(answers)
      const type = determineType(scores)
      const query = new URLSearchParams({
        type: type,
        r: scores.R.toString(),
        i: scores.I.toString(),
        m: scores.M.toString(),
        o: scores.O.toString(),
      })
      router.push(`/result?${query.toString()}`)
    }, 1000)
  }

  const allCurrentQuestionsAnswered = currentPageQuestions.every((q) => answers[q.id] !== undefined)

  const getCircleSize = (value: number) => {
    if (value === 1 || value === 7) return "h-14 w-14"
    if (value === 2 || value === 6) return "h-12 w-12"
    if (value === 3 || value === 5) return "h-10 w-10"
    return "h-8 w-8"
  }

  const getCircleColors = (value: number, isSelected: boolean) => {
    if (value <= 3) {
      return isSelected
        ? "bg-[#D7C097] border-[#D7C097] shadow-[0_0_20px_rgba(215,192,151,0.5)]"
        : "bg-transparent border-2 border-[#D7C097] hover:bg-[#D7C097]/20"
    }
    if (value === 4) {
      return isSelected
        ? "bg-gray-400 border-gray-400 shadow-[0_0_20px_rgba(156,163,175,0.5)]"
        : "bg-transparent border-2 border-gray-400 hover:bg-gray-400/20"
    }
    return isSelected
      ? "bg-[#007E6E] border-[#007E6E] shadow-[0_0_20px_rgba(0,126,110,0.5)]"
      : "bg-transparent border-2 border-[#007E6E] hover:bg-[#007E6E]/20"
  }

  if (isSubmitting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F7F4] text-center space-y-6">
        <div className="w-16 h-16 border-4 border-[#007E6E] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xl font-bold text-[#3D3A33] animate-pulse">
          당신의 AI 생존 유형을 분석 중입니다...
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F7F4]">
      {/* Progress Bar */}
      <div className="sticky top-0 z-10 bg-[#F8F7F4] px-6 pb-4 pt-8">
        <div className="mx-auto max-w-md">
          <div className="h-2 overflow-hidden rounded-full bg-[#E8E6E0]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#A8B5A0] to-[#8FA085] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-center text-sm text-[#6B665E]">
            {answeredCount} of {totalQuestions} questions answered • Page {currentPage + 1} of 4
          </p>
        </div>
      </div>

      {/* Questions List */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-8 pb-20">
        {/* Changed px-6 -> px-4 sm:px-6 for better mobile spacing if needed, but keeping generally spacious */}
        <div className="mx-auto max-w-md space-y-6">
          {currentPageQuestions.map((question) => (
            <div key={question.id} className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="mb-4">
                {/* Typography Change: text-xl -> text-lg */}
                <p className="text-lg leading-relaxed text-[#3D3A33] break-keep font-sans font-medium">{question.text}</p>
                {/* Subtext verified text-sm */}
                <p className="mt-2 text-sm leading-relaxed text-[#8B8680] font-sans">{question.subtext}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 sm:gap-3 px-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAnswer(question.id, value)}
                      className="transition-transform active:scale-95 flex-shrink-0"
                    >
                      <div
                        className={`rounded-full transition-all duration-300 ${getCircleSize(value)} ${getCircleColors(
                          value,
                          answers[question.id] === value,
                        )}`}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between px-2 text-center">
                  <span className="text-xs leading-tight text-[#8B8680] font-sans">비동의</span>
                  <span className="text-xs leading-tight text-[#8B8680] font-sans">동의</span>
                </div>
              </div>
            </div>
          ))}

          {/* Continue Button */}
          <div className="pt-8 pb-12">
            <button
              onClick={handleContinue}
              disabled={!allCurrentQuestionsAnswered}
              className="w-full rounded-full bg-gradient-to-r from-[#A8B5A0] to-[#8FA085] py-4 text-lg font-medium text-white shadow-[0_4px_20px_rgba(168,181,160,0.3)] transition-all disabled:opacity-40 disabled:shadow-none active:scale-[0.98] font-sans"
            >
              {currentPage < questionsPerPage.length - 1 ? "다음 ->" : "결과 보기 ->"}
            </button>
            {!allCurrentQuestionsAnswered && (
              <p className="mt-3 text-center text-sm text-[#8B8680] font-sans">
                모든 질문에 답해주세요
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
