### to install dependencies and run server:
```bash
$ npm i
$ npm run dev
```

### to run migrations:
```bash
$ npx prisma migrate dev
```

### to create migrations:
```bash
$ npx prisma migrate dev --name <name of your migration>
```

### to sync db with code:
```bash
$ npx prisma db push
```

### to manually seed the db:
```bash
$ np prisma db seed
```

### to see the db ui:
```bash
$ npx prisma studio
```

### to create PrismaClient:
```bash
$ npx prisma generate
```