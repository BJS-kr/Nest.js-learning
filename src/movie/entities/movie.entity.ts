import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar', {length: 40})
    title: string
    @Column('varchar', {length: 100})
    desc: string
    @Column('varchar', {length: 20})
    name:string
    @Column('int', {default:0})
    like:number
}