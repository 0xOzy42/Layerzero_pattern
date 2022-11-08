# Deploy and Manage Layer Zero contracts (counter)

## Create and update .env file

- DEPLOYER_PRIVKEY="<PRIVKEY>"

## Deploy Counter Contract

```shell
npx hardhat deploy --network <networkName>
```

## Set remote contract

```shell
npx hardhat set_remote --network <networkName> --target <networkName>
```

## Increment from contract to remote contract

```shell
npx hardhat increment --network <networkName> --target <networkName>
```

## Get counter for a given contract

```shell
npx hardhat get_counter --network <networkName>
```
