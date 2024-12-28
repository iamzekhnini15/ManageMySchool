import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Message } from "./Message";
import { Announcement } from "./Announcement";
import { Role } from "./User_role";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ nullable: true })
    profile_picture: string;

    @Column({ default: false })
    isEmailVerified: boolean;

    @Column({ default: false })
    isTwoFactorEnabled: boolean;

    @Column({ type: "json", nullable: true })
    preferences: object;

    @Column({ type: "timestamp", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    lastLogin: Date;

    @Column({ default: "pending" })
    status: string;

    @Column()
    roleId: string;

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn({ name: "roleId" })
    role: Role;

    @OneToMany(() => Student, student => student.user)
    students: Student[];

    @OneToMany(() => Teacher, teacher => teacher.user)
    teachers: Teacher[];

    @OneToMany(() => Message, message => message.sender)
    sentMessages: Message[];

    @OneToMany(() => Message, message => message.receiver)
    receivedMessages: Message[];

    @OneToMany(() => Announcement, announcement => announcement.sender)
    announcements: Announcement[];
}
