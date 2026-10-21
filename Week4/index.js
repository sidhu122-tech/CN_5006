const mongoose=require('mongoose');
const MONGO_URI = 'mongodb+srv://patelsidhu655_db_user:Sidhu1122@cluster0.hycrbp4.mongodb.net/';
const PersonSchema = new mongoose.Schema({
      name: { 
        type: String, 
        required: true 
    }, 
    age: Number, 
    gender: String, 
    salary: Number 
})

const Person = mongoose.model(
    'modelname', 
    PersonSchema, 
    'personCollection' 
);

// Function to insert one document 

async function insertOne() {
        const doc1 = new Person({ 
        name: 'NHQ', 
        age: 32, 
        gender: 'Male', 
        salary: 1234 
})

   const savedDoc = await doc1.save(); 
 
    console.log('One document inserted'); 
    console.log(savedDoc); 
}

async function main() { 
 
    try { 
 
        await mongoose.connect(MONGO_URI); 
        console.log(`Connected to ${MONGO_URI}`); 
 
        await insertOne(); 
 
        } catch (err) { 
 
        console.error('Error:', err); 
 
    } finally { 
 
        await mongoose.connection.close(); 
        console.log('Connection closed'); 
 
    } 
} 
 
main();

// Function to insert many documents 
async function insertMany() { 
 
    const manypersons = [  
        { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456 }, 
        { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000 }, 
        { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402 }, 
        { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519 } 
    ]; 
 
    const result = await Person.insertMany(manypersons); 
 
    console.log('Many documents inserted'); 
    console.log(result); 
}

async function main() { 
    try { 
        await mongoose.connect(MONGO_URI); 
        console.log(`Connected to ${MONGO_URI}`); 
        await insertOne(); 
        await insertMany(); 
        } catch (err) { 
        console.error('Error:', err); 
    } finally { 
        await mongoose.connection.close(); 
        console.log('Connection closed'); 
    } 
} 
main();

// Find all documents 
async function findAll() { 
 
    const docs = await Person.find({}) 
        .sort({ salary: 1 })      // sort by salary ascending 
        .select('name salary age') 
        .limit(100); 
 
    console.log("Showing multiple documents"); 
 
    docs.forEach(doc => { 
        console.log(doc.age, doc.name, doc.salary); 
    }); 
}