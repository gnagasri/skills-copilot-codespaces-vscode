import logging

def calculateNumbers(var1, var2)
    return var1 + var2
    //add logging here
    //add error handling here
    logging.basicConfig(level=logging.INFO)

    def calculateNumbers(var1, var2):
        try:
            result = var1 + var2
            logging.info(f"Calculated result: {result}")
            return result
        except Exception as e:
            logging.error(f"Error calculating numbers: {e}")
            return None

