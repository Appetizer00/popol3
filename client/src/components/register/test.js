import axios from "axios";
import { API_URL } from "../config/contansts";
import { useState } from "react";

function Test(params) {
  const [userData,setuserData] = useState([])
  const test = async (e) => {
    e.preventDefault();
    const Nid = e.target.Nid.value;
    const Npwd = e.target.Npwd.value;
    const CKpwd = e.target.CKpwd.value; //비밀번호 확인란
    const Nemail = e.target.Nemail.value;
    const Nname = e.target.Nname.value;
    const Nphone = e.target.Nphone.value;
    // console.log(Nemail,Nid,Nphone,CKpwd,Npwd,Nname)
    //post db에서 데이터 저장할때 get db에서 데이터 받아올 떄
    //post (url,{key:value})
    // const data={id:Nid, pwd:Npwd, name:Nname, email:Nemail, phone:Nphone}
    await axios.post(`${API_URL}/user`,{id:Nid, pwd:Npwd, name:Nname, email:Nemail, phone:Nphone})
    .then(()=>{
      console.log("성공");
    })
    .catch((err)=>{
      console.log("실패");
      console.error(err);
    })
  }

  const getUesr = async (e)=>{
    e.preventDefault();
    const id = e.target.id.value // 닉네임 입력하기
    const pwd = e.target.pwd.value //
    try {
      await axios.get(`${API_URL}/user`,{params:{user:id}})
      .then((res)=>{
        console.log(res.data);
        setuserData(res.data);
        //const data = [{1},{2},{3}] data[0] = 1
      })
      .catch(()=>{

      })
    } catch (error) {
      
    }

  }

  return(
    <div>
      {/* <form onSubmit={test}>
      <select id="userType" className="form-control">
            <option value="0">고객</option>
            <option value="1">관리자</option>
          </select>
          <label>닉네임</label>
          <input id="Nid" type="text" className="form-control"placeholder="ID"/>

          <label>비밀번호</label>
          <input id="Npwd" type="password"className="form-control"placeholder="Password"
          />
          <label>비밀번호 확인</label>
          <input
            id="CKpwd"
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />

          <label>이름</label>
          <input
            id="Nname"
            type="text"
            className="form-control"
            placeholder="Name"
          />

          <label>이메일</label>
          <input
            id="Nemail"
            type="email"
            className="form-control"
            placeholder="Email"
          />

          <label>연락처</label>
          <input
            id="Nphone"
            type="text"
            className="form-control"
            placeholder="Phone number"
          />
          <button type="submit">등록</button>
      </form> */}
      <form onSubmit={getUesr}>
        <input id="id" placeholder="닉네임"></input>
        <input id="pwd" placeholder="password"></input>
        <button type="submit">조회</button>
      </form>
      
      {userData.map((a) => {
        return (
          <div>
              {a.id}
              {a.email}
              {a.password}
          </div>
        );
      })}
    </div>
  )
}

export default Test;