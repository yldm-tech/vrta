import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { mockImgAvatar } from '@/utils/mockImages';
import { IUser } from '@/models';

const users: IUser[] = [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid() as string,
    avatarUrl: mockImgAvatar(index + 1),
    name: faker.name.fullName() as string,
    company: faker.company.name() as string,
    isVerified: faker.datatype.boolean() as boolean,
    status: sample(['active', 'banned']),
    role: sample([
        'Leader',
        'Hr Manager',
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer'
    ])
}));

export default users;
