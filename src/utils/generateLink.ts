export const generateLink = (
  reqArea: string | null,
  reqCertificate: string | null,
  reqD0LevelName: string | null,
  reqD1LevelName: string | null,
  reqD2LevelName: string | null,
  reqDays: string | null,
  reqDistrict: string | null,
  reqOnline: string | null,
  reqQuery: string | null
): string => {
  const link = `${reqArea ? `area=${reqArea}&` : ''}${
    reqCertificate ? `certificate=${reqCertificate}&` : ''
  }${reqD0LevelName ? `d0LevelName=${reqD0LevelName}&` : ''}${
    reqD1LevelName ? `d1LevelName=${reqD1LevelName}&` : ''
  }${reqD2LevelName ? `d2LevelName=${reqD2LevelName}&` : ''}${
    reqDays ? `days=${reqDays}&` : ''
  }${reqDistrict ? `district=${reqDistrict}&` : ''}${
    reqOnline ? `online=${reqOnline}&` : ''
  }${reqQuery ? `q=${reqQuery}&` : ''}`;

  return link ? link.slice(0, -1) : '';
};
