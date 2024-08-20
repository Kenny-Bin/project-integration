import {Column, Entity, OneToOne, PrimaryColumn, JoinColumn, OneToMany} from 'typeorm';

@Entity('USER_INFO', { name: 'users' })
export class UserEntity {
  @PrimaryColumn({ name: 'IDX' })
  idx: number;

  @Column({ name: 'YKIHO' })
  ykiho: string;

  @Column({ name: 'USER_ID' })
  userId: string;

  @Column({ name: 'USER_NM' })
  userNm: string;

  @Column({ name: 'USER_PW' })
  userPw: string;

  @Column({ name: 'MOBILE_NO' })
  mobileNo: string;

  @Column({ name: 'EMAIL' })
  email: string;

  @Column({ name: 'PROF_IMG' })
  profile: string;

  @Column({ name: 'JOB_TYPE_CD' })
  jobCd: string;

  @Column({ name: 'DGSBJT_CD' })
  dgsbjtCd: string;

  @Column({ name: 'DEVICE_TOKEN' })
  deviceToken: string;

  @Column({ name: 'DEVICE_OS' })
  deviceOs: string;

  @Column({ name: 'IS_USE' })
  isUse: number;

  // @Column({ nullable: true })
  // jobCdNm: string;
  //
  // @Column({ nullable: true })
  // dgsbjtCdNm: string;
  //
  // @Column({ nullable: true })
}