import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Schedule } from "./Schedule";

@Entity("rooms")
export class Room {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    capacity: number;

    @Column("jsonb", { nullable: true })
    equipment: object;

    @OneToMany(() => Schedule, schedule => schedule.room)
    schedules: Schedule[];
}
