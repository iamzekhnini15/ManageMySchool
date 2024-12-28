import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Class } from "./Class";
import { Course } from "./Course";
import { Schedule } from "./Schedule";

@Entity("teachers")
export class Teacher {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, user => user.teachers)
    user: User;

    @Column({nullable: true})
    name: string;

    @Column({ nullable: true })
    qualification: string;

    @Column({ nullable: true })
    speciality: string;

    @Column({ nullable: true })
    hire_date: Date;

    @Column("jsonb", { nullable: true })
    teaching_preferences: object;

    @OneToMany(() => Class, class_ => class_.teacherId)
    classes: Class[];

    @OneToMany(() => Course, course => course.teacher)
    courses: Course[];

    @OneToMany(() => Schedule, schedule => schedule.teacher)
    schedules: Schedule[];
}
