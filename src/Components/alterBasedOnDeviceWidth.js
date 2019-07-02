const alterBasedOnDeviceWidth = () => {
  console.log(window.innerWidth);
  if (window.innerWidth >= 320 && window.innerWidth < 767) {
    return '18x18';
  } else if (window.innerWidth >= 768 && window.innerWidth < 1023) {
    return '24x24';
  } else if (window.innerWidth >= 1024 && window.innerWidth < 1439) {
    return '30x30';
  } else if (window.innerWidth >= 1440) {
    return '40x40';
  }
};

export default alterBasedOnDeviceWidth;
