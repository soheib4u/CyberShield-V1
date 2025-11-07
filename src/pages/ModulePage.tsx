import { useParams, useNavigate } from "react-router-dom";
import { modules } from "@/data/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Lightbulb, Gamepad2 } from "lucide-react";
import MatrixRain from "@/components/MatrixRain";
import { useToast } from "@/hooks/use-toast";
import { useGameProgress } from "@/hooks/useGameProgress";
import { shuffleQuizzes } from "@/utils/quizHelpers";
import InteractiveMission from "@/components/InteractiveMission";

const ModulePage = () => {
  const { moduleId: id } = useParams();
  const navigate = useNavigate();
  const module = modules.find((m) => m.id === id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showTaunt, setShowTaunt] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentTheory, setCurrentTheory] = useState(0);
  const [stage, setStage] = useState<"theory" | "mission" | "quiz">("theory");
  const [shuffledQuiz, setShuffledQuiz] = useState<any[]>([]);
  const { progress, addXP, addCertCoins, completeModule, unlockAchievement, unlockTrophy, earnBadge } = useGameProgress();
  const { toast } = useToast();

  useEffect(() => {
    if (module && stage === "quiz") {
      setShuffledQuiz(shuffleQuizzes(module.quiz));
    }
  }, [module, stage]);

  if (!module) return null;

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === shuffledQuiz[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setShowTaunt(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowTaunt(false);
    } else {
      setQuizComplete(true);
      
      const finalScore = ((score + 1) / shuffledQuiz.length) * 100;
      
      if (finalScore >= 70) {
        addXP(module.xpReward);
        addCertCoins(100);
        completeModule(module.id);
        earnBadge(module.id);
        
        if (finalScore === 100) {
          unlockAchievement("perfectionist");
          unlockTrophy("bronze-shield");
        }
        
        toast({
          title: "Module Complete!",
          description: `Earned ${module.xpReward} XP and 100 CertCoins`,
        });
      }
    }
  };

  const startMission = () => {
    setStage("mission");
  };

  const startQuiz = () => {
    setStage("quiz");
  };

  const handleMissionComplete = (success: boolean) => {
    if (success) {
      const bonusXP = 100;
      addXP(bonusXP);
      addCertCoins(50);
      toast({
        title: "Mission Complete!",
        description: `Earned ${bonusXP} XP and 50 CertCoins`,
      });
    }
    setStage("quiz");
  };

  return (
    <div className="min-h-screen relative bg-background">
      <MatrixRain />
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate("/learn")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </Button>
        </div>

        <Card className="mb-6 bg-card/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              {module.title}
            </CardTitle>
            <p className="text-muted-foreground">{module.description}</p>
          </CardHeader>
        </Card>

        {stage === "theory" && (
          <div>
            <Card className="mb-6 bg-card/80 backdrop-blur">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Learn the Basics</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {currentTheory + 1} / {module.theory.length}
                  </span>
                </div>
                <Progress value={((currentTheory + 1) / module.theory.length) * 100} className="h-2" />
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{module.theory[currentTheory].visual}</div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {module.theory[currentTheory].title}
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    {module.theory[currentTheory].content}
                  </p>
                </div>
                <div className="flex gap-3 justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentTheory(Math.max(0, currentTheory - 1))}
                    disabled={currentTheory === 0}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  {currentTheory < module.theory.length - 1 ? (
                    <Button onClick={() => setCurrentTheory(currentTheory + 1)}>
                      Next <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={startMission}
                      className="font-mono w-full sm:w-auto"
                    >
                      START MISSION <Gamepad2 className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {stage === "mission" && (
          <div>
            <div className="mb-4">
              <Button
                variant="outline"
                onClick={() => setStage("theory")}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Theory
              </Button>
            </div>
            <InteractiveMission moduleId={id!} onComplete={handleMissionComplete} />
          </div>
        )}

        {stage === "quiz" && shuffledQuiz.length > 0 && (
          <div>
            {!quizComplete ? (
              <Card className="bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {shuffledQuiz.length}</span>
                    <span className="text-primary font-semibold">Score: {score}/{shuffledQuiz.length}</span>
                  </div>
                  <Progress value={((currentQuestion + 1) / shuffledQuiz.length) * 100} className="h-2" />
                </CardHeader>

                <CardHeader>
                  <CardTitle className="text-xl font-mono">
                    {shuffledQuiz[currentQuestion].question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {shuffledQuiz[currentQuestion].options.map((option, index) => {
                    const isCorrect = index === shuffledQuiz[currentQuestion].correctAnswer;
                    const isSelected = selectedAnswer === index;
                    
                    return (
                      <Button
                        key={index}
                        variant={
                          showResult
                            ? isCorrect
                              ? "default"
                              : isSelected
                              ? "destructive"
                              : "outline"
                            : isSelected
                            ? "default"
                            : "outline"
                        }
                        className="w-full justify-start h-auto py-3 px-4 text-left"
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                      >
                        <span className="font-mono mr-3">{String.fromCharCode(65 + index)}.</span>
                        <span>{option}</span>
                        {showResult && isCorrect && <CheckCircle className="ml-auto w-5 h-5" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="ml-auto w-5 h-5" />}
                      </Button>
                    );
                  })}

                  {showResult && (
                    <div className={`mt-4 p-4 rounded-lg ${selectedAnswer === shuffledQuiz[currentQuestion].correctAnswer ? "bg-green-500/20 border border-green-500/50" : "bg-destructive/20 border border-destructive/50"}`}>
                      <p className="font-mono text-sm">
                        {shuffledQuiz[currentQuestion].explanation}
                      </p>
                      {showTaunt && selectedAnswer !== shuffledQuiz[currentQuestion].correctAnswer && (
                        <p className="font-mono text-sm mt-2 italic text-destructive">
                          💀 {shuffledQuiz[currentQuestion].taunt}
                        </p>
                      )}
                    </div>
                  )}

                  {showResult && (
                    <Button 
                      onClick={nextQuestion} 
                      className="w-full font-mono"
                    >
                      {currentQuestion < shuffledQuiz.length - 1 ? "NEXT QUESTION" : "FINISH QUIZ"} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/80 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">
                      {((score / shuffledQuiz.length) * 100) >= 70 ? "🏆" : "📚"}
                    </div>
                    <h3 className="text-2xl font-bold font-mono">
                      {((score / shuffledQuiz.length) * 100) >= 70 ? "MISSION ACCOMPLISHED!" : "KEEP TRAINING!"}
                    </h3>
                    <p className="text-xl font-mono">
                      Final Score: {score} / {shuffledQuiz.length}
                    </p>
                    <p className="text-lg">
                      ({Math.round((score / shuffledQuiz.length) * 100)}%)
                    </p>
                    <div className="flex gap-3 justify-center pt-4">
                      <Button variant="outline" onClick={() => navigate("/learn")}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Hub
                      </Button>
                      <Button onClick={() => window.location.reload()}>
                        Retry Module
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
