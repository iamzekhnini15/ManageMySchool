import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "./User";
import { StudentClass } from "./StudentClass";
import { Grade } from "./Grade";
import { ReportCard } from "./ReportCard";
import { PerformanceMetric } from "./PerformanceMetric";
import { Attendance } from "./Attendance";
import { StudentActivity } from "./StudentActivity";

@Entity("students")
export class Student {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, user => user.students)
    @JoinColumn({ name: "userId" })
    userId: string;

    @Column()
    date_of_birth: Date;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    phone_number: string;

    @Column({ nullable: true })
    enrollment_date: Date;

    @Column({ nullable: true })
    graduation_date: Date;

    @Column({ nullable: true })
    special_needs: string;

    @OneToMany(() => StudentClass, studentClass => studentClass.student)
    studentClasses: StudentClass[];

    @OneToMany(() => Grade, grade => grade.student)
    grades: Grade[];

    @OneToMany(() => ReportCard, reportCard => reportCard.student)
    reportCards: ReportCard[];

    @OneToMany(() => PerformanceMetric, performanceMetric => performanceMetric.student)
    performanceMetrics: PerformanceMetric[];

    @OneToMany(() => Attendance, attendance => attendance.student)
    attendances: Attendance[];

    @OneToMany(() => StudentActivity, studentActivity => studentActivity.student)
    studentActivities: StudentActivity[];
}
