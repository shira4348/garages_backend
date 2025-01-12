# ניהול מוסכים - צד שרת

## סקירה
זהו המערכת הצד שרת של אפליקציית ניהול מוסכים. המערכת מספקת API לניהול מוסכים, אינטראקציה עם נתוני ממשלה וטיפול באימות וזיהוי.

## תכונות
- **אימות**: כניסת משתמשים ואימות מבוסס JWT.
- **ניהול מוסכים**:
  - שליפת מוסכים מסופקים על ידי ממשלה.
  - ניהול מוסכים בבסיס הנתונים של האפליקציה.
- **ולידציה**: אימות בקשות נכנסות באמצעות Joi.

## טכנולוגיות בשימוש
- **Node.js**: סביבה להרצת JavaScript.
- **Express.js**: מסגרת לפיתוח API.
- **MongoDB**: בסיס נתונים לאחסון מידע האפליקציה.
- **Mongoose**: ORM עבור MongoDB.
- **Jest**: מסגרת לבדיקות.
- **TypeScript**: JavaScript מוקלד לשיפור הפיתוח.

## דרישות מוקדמות
ודא שיש לך את הדברים הבאים מותקנים על המחשב שלך:
- Node.js (גרסה 16 ומעלה)
- npm

## התקנה
1. שכפל את המאגר:
   ```bash
   git clone https://github.com/shira4348/garages_backend.git
   cd garages_backend
   ```
2. התקן את התלויות:
   ```bash
   npm install
   ```

## הרצת האפליקציה
### מצב פיתוח
הפעל את השרת במצב פיתוח:
```bash
npm run dev
```

### מצב פרודקשן
בנה והפעל את השרת במצב פרודקשן:
```bash
npm run build
npm start
```

## נקודות קצה (API)
### אימות
- **POST** `/api/auth/login`
  - גוף הבקשה:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - תגובה:
    ```json
    {
      "token": "<JWT_TOKEN>"
    }
    ```

### מוסכים
- **GET** `/api/garages/government-garages`
  - שולף מוסכים מ-API ממשלתי.

- **GET** `/api/garages/app-garages`
  - שולף מוסכים המאוחסנים בבסיס הנתונים של האפליקציה.

- **POST** `/api/garages/save-garages`
  - גוף הבקשה:
    ```json
    {
      "garages": [
        {
          "_id": 1,
          "mispar_mosah": 123,
          "shem_mosah": "מוסך דוגמה",
          "cod_sug_mosah": 6,
          "sug_mosah": "מוסך מורשה",
          "ktovet": "רחוב דוגמה 123",
          "yishuv": "עיר דוגמה",
          "telephone": "050-1234567",
          "mikud": 12345,
          "cod_miktzoa": 10,
          "miktzoa": "מכונאות",
          "menahel_miktzoa": "דוגמה",
          "rasham_havarot": 123456789,
          "TESTIME": null
        }
      ]
    }
    ```

- **DELETE** `/api/garages/delete-garage/:id`
  - מוחק מוסך לפי מזהה.

## בדיקות
הרץ את סט הבדיקות באמצעות Jest:
```bash
npm test
```

## אינטגרציה עם צד לקוח

כדי לבצע אינטגרציה מלאה עם צד הלקוח של האפליקציה, יש לשכפל ולהתקין את הריפו של הפרונטנד:
שכפל את מאגר צד הלקוח:
```bash
git clone https://github.com/shira4348/garages_frontend.git
```
עקוב אחרי ההוראות בקובץ ה-README של צד הלקוח להגדרת הסביבה ולהרצת האפליקציה.
לינק למאגר הפרונטנד

