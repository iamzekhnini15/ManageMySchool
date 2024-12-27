import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Course } from "./Course";
import { Schedule } from "./Schedule";

@Entity("subjects")
export class Subject {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    department: string;

    @Column({ nullable: true })
    curriculum_objectives: string;

    @OneToMany(() => Course, course => course.subject)
    courses: Course[];

    @OneToMany(() => Schedule, schedule => schedule.subject)
    schedules: Schedule[];
}
