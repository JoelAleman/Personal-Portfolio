"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import {useState} from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function sumNumbers(a:number[]){
  let sum: number = 0;
  for (let item of a){
    sum += item;
  }
  return sum;
}
function MyButton() {
  return (
    <button>{"Button Time!"}</button>
  );
}

function MyHeader(){
  return (
    <h1>Oh boy Im a header!</h1>
  );
}

function calcMPG(miles: number, gallons: number){
  return miles / gallons;
}


export default function Home() {
  console.log("Rendered Home!")
  let [milesDriven, setMilesDriven] = useState(0)
  let [gallonsUsed, setGallonsUsed] = useState(0)

  return (
    <main className={styles.main}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            {"Joel's Portfolio"}
          </Typography>
          <Button color="inherit">Button!</Button>
        </Toolbar>
      </AppBar>
      <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <Image
        src={"/Headshot2021.jpeg"}
        width={300}
        height={400}
        alt="A picture of me"
        ></Image>
      <MyHeader/>
    </main>
    
  );
}