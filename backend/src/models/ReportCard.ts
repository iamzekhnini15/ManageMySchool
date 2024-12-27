import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "./Student";

@Entity("report_cards")
export class ReportCard {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Student, student => student.reportCards)
    student: Student;

    @Column()
    academic_period: string;

    @Column("decimal", { precision: 5, scale: 2 })
    average_score: number;

    @Column({ nullable: true })
    global_comment: string;

    @Column()
    generated_date: Date;
}
