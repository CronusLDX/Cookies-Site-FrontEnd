import { Box, Flex, Text, Button } from '@radix-ui/themes';
import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { CarrinhoInfo } from '../entities/Interfaces';
import { formattedCurrency } from '../entities/AllUseFunctions';
import { useCart } from '../contexts/CartContext';

const CarrinhoItem: React.FC<{ prop: CarrinhoInfo }> = ({ prop }) => {
  const { handleAddQuantity, handleRemoveQuantity, removeFromCart } = useCart();
  return (
    <Box mt="6" mb={'6'}>
      <div className="border-1 rounded-xl border-gray-400 w-full h-full my-3">
        <Flex
          justify="between"
          align="end"
          mb="4"
          mt="4"
          px={'4'}
          width={'100%'}
        >
          <Flex justify="center" gap="4">
            <img src={prop.image} className="h-[8rem] w-[35%] rounded-3xl" />
            <Flex direction={'column'} gap={'2'}>
              <Text size="4">{prop.title}</Text>
              <Text size="4" weight="medium">
                {formattedCurrency(prop.price)}
              </Text>
            </Flex>
          </Flex>
          <Flex
            justify={'center'}
            gap={'2'}
            align={'center'}
            direction={'column'}
          >
            <Button
              variant="surface"
              size={'2'}
              mb={'8'}
              onClick={() => {
                if (prop.id) {
                  removeFromCart(prop.id);
                } else {
                  console.error('ID nao encontrado');
                }
              }}
            >
              <FaTrashCan className="ml-auto" />
            </Button>
            <Flex>
              <Button
                size={'2'}
                variant="soft"
                onClick={() => {
                  if (prop.id) {
                    handleRemoveQuantity(prop.id);
                  } else {
                    console.error('ID não fornecido ou encontrado.');
                  }
                }}
              >
                -
              </Button>
              <span className="  text-2xl px-2 rounded-lg ">
                {prop.quantity}
              </span>
              <Button
                size={'2'}
                variant="soft"
                onClick={() => {
                  if (prop.id) {
                    handleAddQuantity(prop.id);
                  } else {
                    console.error('ID não fornecido ou encontrado.');
                  }
                }}
              >
                +
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Box>
  );
};

export default CarrinhoItem;
