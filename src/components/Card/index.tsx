import Image from 'next/image';
import React from 'react';
import forbiddenFountain from '../../../public/images/forbidden-fountain.png';
import forbiddenLockerroom from '../../../public/images/forbidden-lockerroom.png';
import partialFountain from '../../../public/images/partial-fountain.png';
import partialLockerroom from '../../../public/images/partial-lockerroom.png';
import requiredLockerroom from '../../../public/images/required-lockerroom.png';
import requiredMask from '../../../public/images/required-mask.png';
import requiredTowel from '../../../public/images/required-towel.png';
import { Gym } from '../../pages';
import Separator from '../Separator';
import * as S from './styles';
import parse from 'html-react-parser';

interface CardProps {
  gym: Gym;
}

interface Schedule {
  weekdays: string;
  hour: string;
}

function Card({ gym }: CardProps) {
  const { opened, title, content, mask, towel, fountain, locker_room, schedules } = gym;

  

  return (
    <S.Container opened={opened}>
      <p>{opened ? 'Aberto' : 'Fechado'}</p>
      <p>{title}</p>
      
      {opened && (
          <>
            <S.Content>
          {parse(`${content}`)}
          </S.Content>
           <S.SeparatorCard />
          </>
      )}

     

      <S.ImageContainer>
        {mask === 'required' && (
          <Image src={requiredMask} alt="hour" width={54} height={64}/>
        )}

        {towel === 'required' && (
          <Image src={requiredTowel} alt="hour" width={66} height={66} />
        )}

        {fountain === 'partial' && (
          
          <Image src={partialFountain} alt="hour" width={56} height={66}/>
        )}
        {opened}

        {fountain !== 'partial' && opened !== undefined && (
          <Image src={forbiddenFountain} alt="hour" width={56} height={66}/>
        )}

        {locker_room === 'allowed' && (
            <Image src={requiredLockerroom} alt="hour" width={70} height={66} />
        )}

        {locker_room === 'closed' && (
            <Image src={forbiddenLockerroom} alt="hour" width={70} height={66} />
        )}

        {
          locker_room === 'partial' && (
            <Image src={partialLockerroom} alt="hour" width={70} height={66}/>
          )        
        }
      </S.ImageContainer>
      
      
        
      <S.SchedulesText>
        {schedules?.map((schedule, index) => (
          <div key={index}>
            <p>{schedule.weekdays}</p>
            <p>{schedule.hour}</p>
          </div>
          )
        )}
      </S.SchedulesText>
    </S.Container>
  );
};

export default Card;
