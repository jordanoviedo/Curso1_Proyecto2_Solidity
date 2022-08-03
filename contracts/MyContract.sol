pragma solidity ^0.5.0;

contract MyContract {

    address[16] public perrosAdoptados;
    uint public balanceWei = 0;
    address payable public admin  = 0x4b32578A0024a111025f215A1f345498834FCC7b;


    function retirarBalance () public {
        require(msg.sender == admin, "No eres el admin");

        admin.transfer(balanceWei);
        balanceWei = 0;
    }

    function adoptar(uint perroIndex) payable public returns (bool) {

        balanceWei += msg.value;
        require(msg.value == 0.005 ether, " Cantidad insuficiente para la adopción");

        // Cpmprobación
        require(perroIndex >= 0 && perroIndex <= 15);

        bool adoptadoConExito = true;

        if ( perrosAdoptados[perroIndex] == address(0) ){
            // msg.sender address del usuario que invoco al contrato
            perrosAdoptados[perroIndex] = msg.sender;

        } else {
            adoptadoConExito = false ;
        }

        return adoptadoConExito;
    }



    function getPerrosAdoptados() public view returns (address[16] memory) {
        return perrosAdoptados;
    }

}