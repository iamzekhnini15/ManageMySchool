import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "./Student";

@Entity("performance_metrics")
export class PerformanceMetric {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Student, student => student.performanceMetrics)
    student: Student;

    @Column()
    metric_type: string;

    @Column("decimal", { precision: 10, scale: 2 })
    value: number;

    @Column()
    date: Date;

    @Column()
    academic_year: string;
}
