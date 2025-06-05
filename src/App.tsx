import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

type Student = {
  nama: string;
  peringkat: number;
  jalur: string;
  skor?: number;
};

const students: Student[] = [
  { nama: "HANUM HUMAIRAH FIRDAUS", peringkat: 1, jalur: "Jalur Domisili", skor: 12500 },
  { nama: "RAFA KARISMA PUTRA", peringkat: 1, jalur: "Jalur Afirmasi", skor: 12649 },
  { nama: "HUSAIN AKMAL ALATAS", peringkat: 2, jalur: "Jalur Domisili", skor: 12372 },
  { nama: "ARFAN NAUFAL RAFASYA", peringkat: 3, jalur: "Jalur Domisili", skor: 12246 },
  { nama: "HAIKAL RAMDANI", peringkat: 4, jalur: "Jalur Domisili", skor: 12171 },
  { nama: "NARENDRA YUDHA HANDOYO", peringkat: 5, jalur: "Jalur Domisili", skor: 12047 },
  { nama: "ATHARRAZKA NIZAR AGUSTIAR", peringkat: 6, jalur: "Jalur Domisili", skor: 11994 },
  { nama: "DYAH AYU PUSPITA LOKA", peringkat: 7, jalur: "Jalur Domisili", skor: 11991 },
  { nama: "MUHAMMAD SHAKA ALFATIH", peringkat: 8, jalur: "Jalur Domisili", skor: 11981 },
  { nama: "FAUZAN AL FIKRI", peringkat: 9, jalur: "Jalur Domisili", skor: 11930 },
  { nama: "MICHAELL RIAFISQY ARSYAD MUTTAQI", peringkat: 10, jalur: "Jalur Domisili", skor: 11924 },
  { nama: "DEVANO RADIKA ALVARIZI", peringkat: 11, jalur: "Jalur Domisili", skor: 11909 },
  { nama: "IHKWATUL KAMILA ALKIROM", peringkat: 12, jalur: "Jalur Domisili", skor: 11900 },
  { nama: "ARSYAKA KENZO HADI PRADIPTA", peringkat: 13, jalur: "Jalur Domisili", skor: 11876 },
  { nama: "RADEN SEAN NADIA ZAFIRA", peringkat: 14, jalur: "Jalur Domisili", skor: 11830 },
  { nama: "GRIZELA STEFANY AGNECYA VALLERY", peringkat: 15, jalur: "Jalur Domisili", skor: 11826 },
  { nama: "NAFSHA ANIL HAWA", peringkat: 16, jalur: "Jalur Domisili", skor: 11826 },
  { nama: "AFIFA NAHDA RAFANDA", peringkat: 17, jalur: "Jalur Domisili", skor: 11585 },
  { nama: "MAYSAROH", peringkat: 18, jalur: "Jalur Domisili", skor: 11564 },
  { nama: "KHANSA ADELIA NAIFAH", peringkat: 19, jalur: "Jalur Domisili", skor: 11358 },
  { nama: "ELNINO REZA OKTAVIAN", peringkat: 20, jalur: "Jalur Domisili", skor: 11320 },
  { nama: "ERLANGGA DAVIN ADITYA", peringkat: 21, jalur: "Jalur Domisili", skor: 10868 },
  { nama: "QALESYA JASMINE WIDODO", peringkat: 22, jalur: "Jalur Domisili", skor: 10609 },
  { nama: "MOCH. AZKA RAMA PRANAJA", peringkat: 23, jalur: "Jalur Domisili", skor: 9849 },
];

export default function AnnouncementApp() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Student | false | null>(null);

  const handleSearch = () => {
    const nameUpper = query.trim().toUpperCase();
    if (!nameUpper) return;
    const found = students.find((s) => s.nama.toUpperCase() === nameUpper);
    setResult(found ? found : false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-emerald-100 p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        PENGUMUMAN PENERIMAAN PESERTA DIDIK BARU <br />
        SD NEGERI 2 SINGOTRUNAN <br />
        Tahun Ajaran 2025/2026
      </motion.h1>

      <div className="flex gap-2 w-full max-w-md">
        <Input
          placeholder="Ketik nama lengkap Siswa"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1"
        />
        <Button onClick={handleSearch}>Cari</Button>
      </div>

      {result !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md mt-8"
        >
          {result ? (
            <Card className="bg-emerald-50 border-emerald-400">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Selamat, {result.nama}!
                </h2>
                <p className="mb-1">
                  Anda dinyatakan <span className="font-bold">DITERIMA</span>.
                </p>
                <p className="mb-1">Peringkat: {result.peringkat}</p>
                <p className="mb-1">Jalur: {result.jalur}</p>
                {result.skor && <p className="mb-1">Skor: {result.skor}</p>}
                <p>
                  Silakan Screenshot halaman ini dan simpan untuk keperluan daftar ulang.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-rose-50 border-rose-400">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Mohon maaf!</h2>
                <p>
                  Nama yang Anda cari tidak ditemukan sebagai peserta yang
                  diterima. Pastikan ejaan nama lengkap sesuai atau hubungi
                  panitia PPDB untuk konfirmasi lebih lanjut.
                </p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      )}
    </div>
  );
}