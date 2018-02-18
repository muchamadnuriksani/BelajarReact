import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumbotronKu = (props) => {
  return (
    <div align="center">
      <Jumbotron>
        <h1 className="display-3">Belajar Jadi Asyik!</h1>
        <p className="lead">Kegiatan Belajar Programming bersama Organisasi Non Profit Santren Koding</p>
        <p className="lead">
          <Button color="success">Mulai Belajar</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronKu;