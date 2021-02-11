import React from "react";
import HeaderSiswa from "../../components/Siswa/HeaderSiswa";
import MainContent from "../../components/Siswa/MainContent";
import SideBar from "../../components/Siswa/SideBar";
import Spacer from "../../components/Spacer";

export default function Siswa() {
  return (
    <div className="flex">
      <SideBar />
      <HeaderSiswa />
      <MainContent />
    </div>
  );
}
