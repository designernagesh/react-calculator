import { useState } from "react";
import { Box, Button, Grid, GridItem, Input } from "@chakra-ui/react";

export const Calculator = () => {
  const [inputValue, setInputValue] = useState("0");
  const [prevResult, setPrevResult] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleInput = (value) => {
    setInputValue((prevValue) => {
      if (prevValue === "0") {
        return value;
      } else {
        return prevValue + value;
      }
    });
  };

  const operatorHandler = (value) => {
    setInputValue((prevValue) => {
      if (/[+\-*/]/.test(prevValue.slice(-1))) {
        return prevValue.slice(0, -1) + value;
      } else {
        return prevValue + value;
      }
    });
  };

  const backHandler = () => {
    setInputValue((prevValue) => {
      if (prevValue.length === 1) {
        return "0";
      } else {
        return prevValue.slice(0, -1);
      }
    });
  };

  const clearHandler = () => {
    setInputValue("0");
    setPrevResult(null);
  };

  const calculateHandler = () => {
    try {
      let result = eval(inputValue);
      setInputValue(result.toString());
      setPrevResult(result);
    } catch (error) {
      console.log(error);
      setPrevResult(null);
      setOperator(null);
    }
  };

  const resultHandler = () => {
    if (prevResult !== null && operator !== null) {
      const currentInputValue = parseFloat(inputValue);
      let result;
      switch (operator) {
        case "+":
          result = prevResult + currentInputValue;
          break;
        case "-":
          result = prevResult - currentInputValue;
          break;
        case "*":
          result = prevResult * currentInputValue;
          break;
        case "/":
          result = prevResult / currentInputValue;
          break;
        default:
          result = "Error";
      }
      setInputValue(result.toString());
      setPrevResult(result);
      setOperator(null);
    } else {
      calculateHandler();
    }
  };

  return (
    <Box width="300px" m="auto">
      <Input
        mb="4px"
        borderWidth="2px"
        textAlign="right"
        size="lg"
        value={inputValue}
      />
      <Grid templateColumns="repeat(4, 1fr)" gap={1}>
        <GridItem colSpan={2}>
          <Button width="100%" onClick={clearHandler}>
            Clear
          </Button>
        </GridItem>
        <GridItem colSpan={2}>
          <Button width="100%" onClick={backHandler}>
            Back
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("7")}>
            7
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("8")}>
            8
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("9")}>
            9
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => operatorHandler("/")}>
            /
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("4")}>
            4
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("5")}>
            5
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("6")}>
            6
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => operatorHandler("*")}>
            x
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("1")}>
            1
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("2")}>
            2
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("3")}>
            3
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => operatorHandler("-")}>
            -
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput(".")}>
            .
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => handleInput("0")}>
            0
          </Button>
        </GridItem>
        <GridItem>
          <Button
            width="100%"
            bg="blue.500"
            color="white"
            onClick={resultHandler}
          >
            =
          </Button>
        </GridItem>
        <GridItem>
          <Button width="100%" onClick={() => operatorHandler("+")}>
            +
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};
