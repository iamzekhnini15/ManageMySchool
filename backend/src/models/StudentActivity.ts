import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "./Student";
import { ExtraCurricularActivity } from "./ExtraCurricularActivity";

@Entity("student_activities")
export class StudentActivity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Student, student => student.studentActivities)
    student: Student;

    @ManyToOne(() => ExtraCurricularActivity, activity => activity.studentActivities)
    activity: ExtraCurricularActivity;

    @Column()
    participation_date: Date;

    @Column({ nullable: true })
    role: string;
}
