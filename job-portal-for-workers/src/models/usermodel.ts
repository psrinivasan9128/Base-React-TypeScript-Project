import { skills, userportfolio } from ".";

export interface userModel {
    userid: string;
    fullName: string;
    userImage: string;
    userDescription: string;
    userSkills: skills[];
    userportFolio: userportfolio[];
}