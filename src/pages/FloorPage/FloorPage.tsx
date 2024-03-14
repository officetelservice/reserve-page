import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { floorState } from '../../recoil';
import { Container, Input, InputContainer, InputText } from './style';
import ButtonComponent from '../../components/Button/Button';

const FloorPage = () => {
	const navigation = useNavigate();

	const setFloorData = useSetRecoilState(floorState);

	const [floor, setFloor] = useState<string>('');

	const handleFloorChange = (e: any) => {
		setFloor(e.target.value);
	};

	const toNext = () => {
		if (!floor) {
			return alert('호수를 입력해주세요');
		}

		setFloorData(floor);

		return navigation('/calendar');
	};

	return (
		<Container>
			<InputContainer>
				<InputText>호실을 입력해 주세요</InputText>
				<Input
					type="number"
					value={floor}
					onChange={handleFloorChange}
					placeholder="ex) 101 "
				/>
			</InputContainer>

			<ButtonComponent title={'다음'} color={'#ffa500'} onClick={toNext} />
		</Container>
	);
};

export default FloorPage;