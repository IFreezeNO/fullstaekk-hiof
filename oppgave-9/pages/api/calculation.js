// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  
  if (req.method === 'POST') {

   
      const data = req.body
      let totalsum = 0;
      if(data.method == "/") {
        totalsum = data.numberOne / data.numberTwo;
      } else if(data.method == "+") {
        totalsum = data.numberOne + data.numberTwo;
      }
      else if(data.method == "-") {
        totalsum = data.numberOne - data.numberTwo;
      }
      else if(data.method == "*"){
        totalsum = data.numberOne * data.numberTwo;
      }
      else {
        res.status(405).json({status: false, data: {message: "Method is invalid"}})
      }
    res.status(201).json({status: true, data: {method: data.method, numberOne : data.numberOne, numberTwo: data.numberTwo, sum: totalsum}})
  } else {
    res.status(405).json({status: false, data: {message: "Wrong request method"}})

  }
}

