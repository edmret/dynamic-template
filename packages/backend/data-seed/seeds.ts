import { createConnection } from 'mongoose';
import { UserSchema } from '../src/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { TemplateSchema } from '../src/schema/template.schema';
const saltRounds = 10;

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const templateDefault = [
  [
    {
      id: '1787ed98-840e-4457-af7f-1e09552be7ec',
      type: 'Text',
      props: {
        content: 'Disposition: Garbage_or_Empty_Box',
        variant: 'h5',
      },
    },
  ],
  [
    {
      id: '26d2fded-884f-4fa1-a707-c9134b42f3d0',
      type: 'DescriptionButton',
      props: {
        content: 'check if user has existing complaint',
        icon: 'Monitor',
        xs: 12,
        lg: 6,
      },
    },
    {
      id: '5577f719-bbef-4c2f-9287-fc41d964823a',
      type: 'DescriptionButton',
      props: {
        content:
          'Check What product the user received in place of the product they ordered',
        icon: 'Headphones',
        xs: 12,
        lg: 6,
      },
    },
  ],
  [
    {
      id: '270e39b7-fc1e-4af5-a2b2-a9b3612f9508',
      type: 'Button',
      triggers: [
        {
          type: 'Click',
          targets: [
            'a309b357-f7ba-495c-a828-b59530e04c34',
            '3cd22df6-2f10-4bbd-b9ef-0cb1eddf82b2',
          ],
          action: 'Hide',
        },
      ],
      props: {
        content: 'Compliant Already Released',
        variant: 'contained',
        xs: 6,
      },
    },
    {
      id: 'ebf5bd6e-878d-4160-90a9-a4bc4aa0b3db',
      type: 'Button',
      triggers: [
        {
          type: 'Click',
          targets: [
            'a309b357-f7ba-495c-a828-b59530e04c34',
            '3cd22df6-2f10-4bbd-b9ef-0cb1eddf82b2',
          ],
          action: 'Show',
        },
      ],
      props: {
        content: 'Compliant Does not Exist',
        variant: 'contained',
        xs: 6,
      },
    },
  ],
  [
    {
      id: 'a309b357-f7ba-495c-a828-b59530e04c34',
      type: 'DescriptionButton',
      display: false,
      props: {
        content: 'Compliant Does Not Exists',
        icon: 'Info',
        xs: 12,
        lg: 6,
      },
    },
  ],
  [
    {
      id: '3cd22df6-2f10-4bbd-b9ef-0cb1eddf82b2',
      type: 'Button',
      display: false,
      props: {
        content: 'Check User Cohort',
        variant: 'contained',
        xs: 6,
        sm: 4,
        lg: 3,
      },
    },
  ],
];

const seedDatabase = async () => {
  try {
    const conn = createConnection(process.env.DATABASE_URL);
    console.log('Connecting to database...', process.env.DATABASE_URL);
    const userModel = conn.model('User', UserSchema);
    const templateModel = conn.model('Template', TemplateSchema);

    console.log('Deleting existing data...');
    // delete all existing data
    await userModel.deleteMany({});

    console.log('Seeding users...');
    const password = await bcrypt.hash('admin', saltRounds);
    // adding new user
    const adminUser = await userModel.create({
      username: 'admin',
      password,
    });

    await templateModel.create({
      creator: adminUser.id,
      name: 'Sample template',
      structure: templateDefault,
    });

    console.log('Database seeded.');

    await conn.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();
