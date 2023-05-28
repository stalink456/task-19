export const generateLink = (
  reqArea: string | null,
  reqCertificate: string | null,
  reqD0LevelId: string | null,
  reqD1LevelId: string | null,
  reqD2LevelId: string | null,
  reqDays: string | null,
  reqDistrict: string | null,
  reqOnline: string | null,
  reqQuery: string | null
): string => {
  const link = `${reqArea ? `area=${reqArea}&` : ''}${
    reqCertificate ? `certificate=${reqCertificate}&` : ''
  }${reqD0LevelId ? `d0LevelId=${reqD0LevelId}&` : ''}${
    reqD1LevelId ? `d1LevelId=${reqD1LevelId}&` : ''
  }${reqD2LevelId ? `d2LevelId=${reqD2LevelId}&` : ''}${
    reqDays ? `days=${reqDays}&` : ''
  }${reqDistrict ? `district=${reqDistrict}&` : ''}${
    reqOnline ? `online=${reqOnline}&` : ''
  }${reqQuery ? `q=${reqQuery}&` : ''}`;

  return link ? link.slice(0, -1) : '';
};
