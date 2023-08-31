import { Candidate } from "src/candidate/entities/candidate.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('registers')
export class Register {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    status: "Aguardando" | "Aprovado" | "Reprovado"

    @OneToOne(() => Candidate)
    @JoinColumn()
    candidate: Candidate
}
