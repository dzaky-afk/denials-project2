import { useState } from 'react';

function useKategoriAktif(initialKategori) {
  const [kategoriAktif, setKategoriAktif] = useState(initialKategori);

  const setAktif = (kategori) => {
    setKategoriAktif(kategori);
  };

  return { kategoriAktif, setAktif };
}

export default useKategoriAktif;
