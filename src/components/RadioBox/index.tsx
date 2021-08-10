import React, { ReactNode } from 'react';
import Separator from '../Separator';
import * as S from './styles'

interface RadioBoxProps {
  children: ReactNode;
}

function RadioBox() {
  function onChangeValue(event: any) {
    console.log(event.target.value);
  }

  return (
    <>
      <S.RadioContainer onChange={onChangeValue}>
        <section>
          <input type="radio" value="Manhã 06:00 às 12:00" name="gender" />
          <S.Text>
            <p>Manhã</p>
            <p>06:00 às 12:00</p>
          </S.Text>
        </section>
        <Separator/>
        <section>
          <input type="radio" value="Tarde 12:01 às 18:00" name="gender" />
          <S.Text>
            <p>Tarde</p>
            <p>12:01 às 18:00</p>
          </S.Text>
        </section>
        <Separator/>
        <section>
          <input type="radio" value="Noite 18:01 às 23:00" name="gender" />
          <S.Text>
            <p>Noite</p>
            <p>18:01 às 23:00</p>
          </S.Text>
        </section>
        <Separator/>
      </S.RadioContainer>
    </>
  );
}

export default RadioBox;
