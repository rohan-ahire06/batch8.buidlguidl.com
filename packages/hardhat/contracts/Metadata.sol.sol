// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./BatchGraduationNFT.sol";

contract Metadata is IGraduateNFTMetadata {

    // You can set the name and color here
    string private _name = "rohann06.eth";
    uint8 private _r = 177;
    uint8 private _g = 175;
    uint8 private _b = 255;

    function getName() external view override returns (string memory) {
        return _name;
    }

    function getColor() external view override returns (uint8, uint8, uint8) {
        return (_r, _g, _b);
    }

    
}
