const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const initalizeSqlDB = async () => {
  const db = open({
    filename: 'example.db',
    driver: sqlite3.Database,
  })
  return db
}

const tableCreate = async () => {
  const db = await initalizeSqlDB()
  const tableQuery = `
    CREATE TABLE IF NOT EXISTS employesData(
      id INTEGER,
      name VARCHAR(200),
      specialization TEXT,
      profile_image TEXT,
      availability TEXT,
      experience TEXT,
      consultation_fee TEXT,
      ratings INTEGER,
      languages_spoken TEXT,
      summary TEXT
    );
  `
  await db.run(tableQuery)
  console.log('table created')
}
const insertData = async () => {
  const db = await initalizeSqlDB()
  const insetQuery = `
   INSERT INTO
    employesData(id, name, specialization, profile_image, availability, experience, consultation_fee, ratings, languages_spoken, summary)
   VALUES (12, 'Dr. Pooja Khanna', 'Dentist', 'https://randomuser.me/api/portraits/women/61.jpg', 'Fully Booked', '9 years', '₹450', 4, 'English, Gujarati', 'Known for pain-free dental procedures, she’s done over 300 smile makeovers and runs an educational YouTube channel on dental hygiene.');
  `
  await db.run(insetQuery)
  console.log('yes table inserted values')
}
insertData()
