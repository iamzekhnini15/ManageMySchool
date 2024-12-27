import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { StudentActivity } from "./StudentActivity";

@Entity("extra_curricular_activities")
export class ExtraCurricularActivity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => User)
    supervisor: User;

    @OneToMany(() => StudentActivity, studentActivity => studentActivity.activity)
    studentActivities: StudentActivity[];
}
