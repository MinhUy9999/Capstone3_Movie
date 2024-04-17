import React, { useState, useEffect } from 'react';
import { quanLyDatVeServ } from '../../services/quanLyDatVeServ';
import SeatRow from './SeatRow';
import SeatInfo from './SeatInfo';

const BookTicket = () => {
    const [arrVe, setArrVe] = useState([]);
  
 
  useEffect(() => {
    quanLyDatVeServ
      .LayDanhSachPhongVe()
      .then(res => {
        console.log(res);
        // setArrVe(res.data.content);
        // setMaHeThongRap(res.data.content[0].maHeThongRap);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderSeatLayout = () => {
    return arrVe.map((hangGhe, index) => (
        <div key={index}>
            <SeatRow hangGhe={hangGhe} soHangGhe={index} />
        </div>
    ));
};

    return (
        <div className='bg-overlay'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 text-center ">
                        <h3 className='mt-3 h1'>MOVIE SEAT SELECTION</h3>
                        <h5 className='pt-0'>SCREEN THIS WAY</h5>
                        <div className='screen mt-3'></div>
                        <div className='text-left fs-ghe ml-5 mt-2'>
                            {renderSeatLayout()} 
                        </div>
                    </div>
                    <div className="col-4">
                        <SeatInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTicket;
