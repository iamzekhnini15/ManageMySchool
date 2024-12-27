import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Class } from "./Class";
import { Teacher } from "./Teacher";
import { Subject } from "./Subject";
import { Room } from "./Room";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Class, class_ => class_.schedules)
    class: Class;

    @ManyToOne(() => Teacher, teacher => teacher.schedules)
    teacher: Teacher;

    @ManyToOne(() => Subject, subject => subject.schedules)
    subject: Subject;

    @Column()
    day_of_week: number;

    @Column({ type: "time" })
    start_time: string;

    @Column({ type: "time" })
    end_time: string;

    @ManyToOne(() => Room, room => room.schedules)
    room: Room;
}
