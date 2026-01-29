import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Baby, BookOpen, GraduationCap, School } from "lucide-react";

interface ProgramDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  program: string | null;
}

const programDetails = {
  Playgroup: {
    icon: Baby,
    age: "2–3 Years",
    description:
      "Our Playgroup program helps children settle into school in a happy and stress-free way. Children learn through play, music, stories and movement activities. Focus is on social skills, communication, routines, motor skills and independence while building comfort and confidence.",
    outcomes: [
      "Comfort in school environment",
      "Listening and speaking skills",
      "Social interaction and sharing",
      "Motor skill development",
      "Growing independence",
    ],
    color: "bg-peach-light",
    iconBg: "bg-peach",
  },
  Nursery: {
    icon: BookOpen,
    age: "3–4 Years",
    description:
      "Children are introduced to letters, numbers, shapes, colours and vocabulary through activities, songs, games and storytelling. Emphasis is on attention span, fine motor skills, creativity and social interaction.",
    outcomes: [
      "Recognize letters and numbers",
      "Identify colours and shapes",
      "Improved fine motor skills",
      "Better attention and classroom behavior",
      "Teamwork and friendship skills",
    ],
    color: "bg-sky-light",
    iconBg: "bg-sky",
  },
  LKG: {
    icon: GraduationCap,
    age: "4–5 Years",
    description:
      "Focus on pre-reading skills, phonics, pre-writing strokes, number concepts and problem-solving through activity-based learning. Children develop confidence, follow instructions and work independently.",
    outcomes: [
      "Phonics and word reading",
      "Writing letters and numbers",
      "Basic math understanding",
      "Independent classroom habits",
      "Confident communication",
    ],
    color: "bg-forest-light",
    iconBg: "bg-forest",
  },
  UKG: {
    icon: School,
    age: "5–6 Years",
    description:
      "Children develop reading skills, writing practice, math concepts, general awareness and logical thinking. Focus is on confidence, discipline, responsibility and readiness for primary school.",
    outcomes: [
      "Reading sentences",
      "Clear writing skills",
      "Addition and subtraction basics",
      "Logical thinking",
      "Primary school readiness",
    ],
    color: "bg-lavender-light",
    iconBg: "bg-lavender",
  },
};

const ProgramDetailDialog = ({
  open,
  onOpenChange,
  program,
}: ProgramDetailDialogProps) => {
  if (!program || !programDetails[program as keyof typeof programDetails]) {
    return null;
  }

  const details = programDetails[program as keyof typeof programDetails];
  const Icon = details.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-4 mb-2">
            <div
              className={`w-14 h-14 rounded-xl ${details.iconBg} flex items-center justify-center`}
            >
              <Icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-heading">
                {program}
              </DialogTitle>
              <VisuallyHidden>
                <DialogDescription>
                  Details about the {program} program for ages {details.age}
                </DialogDescription>
              </VisuallyHidden>
              <span className="text-muted-foreground">{details.age}</span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h4 className="font-heading font-bold text-foreground mb-2">
              About This Program
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {details.description}
            </p>
          </div>

          <div className={`${details.color} rounded-xl p-5`}>
            <h4 className="font-heading font-bold text-foreground mb-3">
              Learning Outcomes
            </h4>
            <ul className="space-y-2">
              {details.outcomes.map((outcome, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="text-forest font-bold">•</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="hero"
            className="w-full"
            onClick={() => {
              onOpenChange(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Enquire About {program}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProgramDetailDialog;
