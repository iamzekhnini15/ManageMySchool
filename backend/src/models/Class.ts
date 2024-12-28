import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Teacher } from "./Teacher";
import { StudentClass } from "./StudentClass";
import { Course } from "./Course";
import { Schedule } from "./Schedule";

@Entity("classes")
export class Class {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    level: string;

    @Column({ nullable: true })
    speciality: string;

    @Column({ nullable: true })
    academic_year: string;

    @Column({ nullable: true })
    max_students: number;

    @ManyToOne(() => Teacher, teacher => teacher.classes)
    @JoinColumn({ name: "teacherId" })
    teacherId: string;

    @OneToMany(() => StudentClass, studentClass => studentClass.class)
    studentClasses: StudentClass[];

    @OneToMany(() => Course, course => course.class)
    courses: Course[];

    @OneToMany(() => Schedule, schedule => schedule.class)
    schedules: Schedule[];
}
