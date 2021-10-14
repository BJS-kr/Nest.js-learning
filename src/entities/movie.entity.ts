import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ database: 'db' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 40, unique: true })
  title: string;
  @Column('varchar', { length: 100, nullable: true, default: null })
  desc: string;
  // array옵션은 PostgreSQL에서만 작동한다.
  // onUpdate옵션은 MySQL에서만 작동한다.
  @Column('varchar', { length: 20, nullable: true, default: null, array: true })
  name: string[];
  @Column('int', { default: 0 })
  like: number;
  // ManyToOne 관계인 곳이 FK가 된다.
  // ManyToOne에선 @JoinColumn을 생략 할 수 있다. 넣어도 ManyToOne에만 넣으면 된다.
  // OneToOne에서는 필수이다. uni 혹은 bi한 관계로 설정할 수 있다.
  // OneToOne에서 JoinColumn이 필수인 이유는 어느 쪽이 foreign key인지 typeorm이 결정할 수 없기때문이다.
  // 착각하기 쉬운 부분이, DB에 userId칼럼이 생긴다고해서 거길 기준으로 검색하는 것이 아니라는 점이다.
  // const movies = await movieRepository.find({ relations: ['user'] });
  // 와 같이 관계성을 설정한 프로퍼티 이름 그대로 관계명을 찾으면 된다.
  @ManyToOne(() => User, (user) => user.movies)
  // 자동으로 되는 것이 두가지 있다.
  // 1. property name + referencedColumnName으로 join column name이 자동 생성된다. 아래와 같이 name을 지정하면 지정한 이름으로 생성된다.
  // 2. referencedColumnName을 지정하지 않으면 자동으로 참조하는 테이블의 Primary Key Column을 reference로 삼는다.
  // 아래의 경우 referencedColumnName을 id(PK)로 지정했으므로 생략해도 되지만 명시적으로 지정할 수 있다는 것을 기억하기 위해.
  // JoinTable은 ManyToMany에서 사용된다.
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
