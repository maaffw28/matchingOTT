import React from "react";
import { Link } from "react-router-dom";

export default function GroupPage() {
  return (
    <div>
      {/* 헤더 부분 시작 */}
      <div
        style={{
          width: "auto",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "coral",
        }}
      >
        <div>
          <h1>GroupName</h1>
        </div>

        <div>
          <h1 style={{ display: "inline-block" }}>SelectedOTT</h1>
          <button>
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Profile
            </Link>
          </button>
        </div>
      </div>
      {/* 헤더 부분 끝 */}

      {/* 정보&채팅 부분 시작 */}
      <div
        style={{
          display: "flex",
          width: "auto",
          height: "1000px",
          backgroundColor: "burlywood",
        }}
      >
        <div style={{ flex: "1", padding: "5px", backgroundColor: "crimson" }}>
          <h2>그룹원 정보</h2>
          <ul
            style={{
              backgroundColor: "whitesmoke",
              margin: "10px",
              width: "auto",
              height: "20%",
            }}
          >
            <li>username1</li>
            <li>
              <button>신고</button>
            </li>
          </ul>
          <ul
            style={{
              backgroundColor: "whitesmoke",
              margin: "10px",
              width: "auto",
              height: "20%",
            }}
          >
            <li>username2</li>
            <li>
              <button>신고</button>
            </li>
          </ul>
          <ul
            style={{
              backgroundColor: "whitesmoke",
              margin: "10px",
              width: "auto",
              height: "20%",
            }}
          >
            <li>username3</li>
            <li>
              <button>신고</button>
            </li>
          </ul>
          <ul
            style={{
              backgroundColor: "whitesmoke",
              margin: "10px",
              width: "auto",
              height: "20%",
            }}
          >
            <li>username4</li>
            <li>
              <button>신고</button>
            </li>
          </ul>
        </div>

        <div
          style={{ flex: "2", padding: "5px", backgroundColor: "chocolate" }}
        >
          <div
            style={{
              backgroundColor: "whitesmoke",
              margin: "10px",
              width: "auto",
              height: "80%",
            }}
          >
            <h2>채팅</h2>
          </div>
          <div
            style={{
              backgroundColor: "whitesmoke",
              margin: "30px 10px 10px 10px",
              width: "auto",
              height: "8%",
            }}
          >
            <h2>입력창</h2>
          </div>
        </div>
      </div>
      {/* 정보&채팅 부분 끝 */}

      {/* 탈퇴 부분 시작 */}
      <div
        style={{
          display: "flex",
          width: "auto",
          height: "100px",
          alignItems: "center",
          backgroundColor: "cornflowerblue",
        }}
      >
        <div style={{ marginLeft: "auto" }}>
          <button>
            <Link to="/" style={{ textDecoration: "none", marginRight: "5px" }}>
              outGroup
            </Link>
          </button>
        </div>
      </div>
      {/* 탈퇴 부분 끝 */}
    </div>
  );
}
