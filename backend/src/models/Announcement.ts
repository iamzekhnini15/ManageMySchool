import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("announcements")
export class Announcement {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToOne(() => User, user => user.announcements)
    sender: User;

    @Column({ nullable: true })
    target_group: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    publish_date: Date;
}
