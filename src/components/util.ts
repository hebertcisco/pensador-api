import HttpStatus from 'http-status';

class Util {
  cadastro(result: any, message: string): any {
    return {
      result,
      message,
      status: HttpStatus.CREATED,
    };
  }

  edicao(result: any, message: string): any {
    return {
      result,
      message,
      status: HttpStatus.OK,
    };
  }

  remocao(result: any, message: string): any {
    return {
      result,
      message,
      status: HttpStatus.OK,
    };
  }

  naoEncontrado(): any {
    return {
      message: 'Registro não encontrado!',
      status: HttpStatus.OK,
    };
  }

  recuperar(result: any): any {
    return {
      result,
      status: HttpStatus.OK,
    };
  }

  erro(error: any): any {
    console.error(error.message);

    return {
      message: error.message,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    };
  }
}

export default new Util();
