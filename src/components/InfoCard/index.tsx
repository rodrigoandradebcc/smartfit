import * as S from './styles';
import requiredMask from '../../../public/images/required-mask.png'
import recommendedMask from '../../../public/images/recommended-mask.png'
import requiredTowel from '../../../public/images/required-towel.png'
import recommendedTowel from '../../../public/images/recommended-towel.png'
import partialFountain from '../../../public/images/partial-fountain.png'
import forbiddenFountain from '../../../public/images/forbidden-fountain.png'
import forbiddenLockerroom from '../../../public/images/forbidden-lockerroom.png'
import partialLockerroom from '../../../public/images/partial-lockerroom.png'
import requiredLockerroom from '../../../public/images/required-lockerroom.png'


import Image from 'next/image';

function InfoCard(): JSX.Element {
  return (
    <>
      <S.CardContainer>
        <S.MaskInfoContainer>
          <section>
            <S.InfoLabel>Máscara</S.InfoLabel>
            <div>
              <div>
                <Image src={requiredMask} alt="mascara" width={48} height={56}/>
                <p>Obrigatório</p>
              </div>
              <div>
                <Image src={recommendedMask} alt="mascara" width={48} height={56}/>
                <p>Recomendado</p>
              </div>
            </div>
          </section>
        </S.MaskInfoContainer>
        <S.TowelInfoContainer>
          <section>
            <S.InfoLabel>Toalha</S.InfoLabel>
            <div>
              <div>
                <Image src={requiredTowel} alt="mascara" width={48} height={56}/>
                <p>Obrigatório</p>
              </div>
              <div>
                <Image src={recommendedTowel} alt="mascara" width={48} height={56}/>
                <p>Recomendado</p>
              </div>
            </div>
          </section>
        </S.TowelInfoContainer>
        <S.FountainInfoContainer>
          <section>
            <S.InfoLabel>Bebedouro</S.InfoLabel>
            <div>
              <div>
                <Image src={partialFountain} alt="mascara" width={48} height={56}/>
                <p>Parcial</p>
              </div>
              <div>
                <Image src={forbiddenFountain} alt="mascara" width={48} height={56}/>
                <p>Proibido</p>
              </div>
            </div>
          </section>
        </S.FountainInfoContainer>
        <S.LockerRoomInfoContainer>
          <section>
            <S.InfoLabel>Vestiários</S.InfoLabel>
            <div>
              <div>
                <Image src={requiredLockerroom} alt="mascara" width={48} height={56}/>
                <p>Liberado</p>
              </div>
              <div>
                <Image src={partialLockerroom} alt="mascara" width={48} height={56}/>
                <p>Parcial</p>
              </div>
              <div>
                <Image src={forbiddenLockerroom} alt="mascara" width={48} height={56}/>
                <p>Fechado</p>
              </div>
            </div>
          </section>
        </S.LockerRoomInfoContainer>
      </S.CardContainer>
    </>
  );
}

export default InfoCard;
