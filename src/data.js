import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase";

const url="https://v1.nocodeapi.com/keshav21/fbsdk/hyotiIEzIVjbRAMB/firestore/allDocuments?collectionName=skills";

export async function getSkills() {
  const res = await fetch(url)
  const data = await res.json();
  return data;
  // console.log(data);
  // fetch(url).then((res)=>{
  //   if(res.ok){

  //     return res.json();
  //   }
  // }).then((data)=>{
  //   return data;
  // })
  // const skills = collection(db, "skills");
  // const skillsSnapshot = await getDocs(skills);
  // return skillsSnapshot.docs.map((doc) => doc.data());
}
