const express = require('express');
const app=express();

app.use(express.json());

app.post('/process-data', (req,res)=>{
    const data=req.body.data;
    const evenNumbers=[];
    const oddNumbers=[];
    const alphabets=[];

    data.forEach(item => {
        if(/^\d+$/.test(item)){
            if(parseInt(item)%2===0){
                evenNumbers.push(item);
            }
            else{
                oddNumbers.push(item);
            }
        }
        else if(/[a-zA-Z]+$/.test(item)){
            alphabets.push(item.toUpperCase());
        }
    });

    res.json({
        "is_success":true,
        "user_id":"pratyush",
        "email": "pratyushsharma1404@gmail.com",
        "roll_number":"21BCE0963",
        "odd_numbers":oddNumbers,
        "even_numbers":evenNumbers,
        "alphabets":alphabets
    });
});

app.post('/extract-numbers', (req, res) => {
    const data = req.body.data;
    const result = data.map(obj => {
        const extractedNumbers = {};
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                extractedNumbers[key] = obj[key].match(/\d+/g) || [];
            }
        }
        return extractedNumbers;
    });

    res.json({
        "is_success": true,
        "data": result
    });
});

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));