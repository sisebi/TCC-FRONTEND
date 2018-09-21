var app = angular.module('MyApp', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider            
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'formControle'
            })            
            .when('/acessoNegado', {
                templateUrl: 'pages/acessoNegado.html',
                controller: 'formControle'
            })
            .otherwise({redirectTo: '/home'});
});
/* "/wEPDwUKLTMwMjEwMTgwMw9kFgJmD2QWBAIBD2QWEAIFDxYCHgRocmVmBSZ+L0FwcF9UaGVtZXMvR3JlZW4vY3NzL2dyaWQuY3NzPzU4MTA0NGQCBg8WAh8ABSd+L0FwcF9UaGVtZXMvR3JlZW4vY3NzL2xvZ2luLmNzcz81ODEwNDRkAgcPFgIfAAUmfi9BcHBfVGhlbWVzL0dyZWVuL2Nzcy9wYWdlLmNzcz81ODEwNDRkAggPFgIfAAUnfi9BcHBfVGhlbWVzL0dyZWVuL2Nzcy9wb3B1cC5jc3M/NTgxMDQ0ZAIJDxYCHwAFKX4vQXBwX1RoZW1lcy9HcmVlbi9jc3MvcHJldmlldy5jc3M/NTgxMDQ0ZAILDxYCHwAFzwEvU0RFL1dlYlJlc291cmNlLmF4ZD9kPUludUxzQnY0NDVYRnlvSVFJYU04c1ZfMEtwY19SS3oyb3ZqNTFPYVFnb3hFWHVhOVRpbENaTmhoMzN5VWc4ZFQzZ2ZJMmJqTTJHR01DVWVjd3F0dUczWnB0eURLUjdWaDBZM05RQU5rZXo0c3ZMMXR1WV94S1Z6dWNxVXgtODlJNzZOMlp3eXlkVkNrTlViZTZXdW51bFI0dHFJMSZ0PTYzNjUxMTEwMTg2MDAwMDAwMD81ODEwNDRkAgwPFgIfAAXPAS9TREUvV2ViUmVzb3VyY2UuYXhkP2Q9U1EzcXFEMlYzb2NZY2xpUlFidjMwdE1UYTF1ZzdpTVdtOW9WXzFYZlpLYmZNNGI4VlhGb1hPbF9jQnR1OW9XMjJwQ2E2eEFFeVYwWGpYcEgtRHFYNnQ3dkVqZjVFNlhfa3ZGdXhaY1g5WlZVbW5TQTZZalhOMW9wQUR4Z2VuU3l2dkJEb256Mk5RSDZvZ0JVWGZPS0dROVNUV2cxJnQ9NjM2NTExMTAxODYwMDAwMDAwPzU4MTA0NGQCDQ8WAh8ABc8BL1NERS9XZWJSZXNvdXJjZS5heGQ/ZD1NT2IxRXJ2X2d6ZllKakdXS1Z0ZlRfbTlnb0JwZmhKSDB1ZWtYVjFFNjZrV0hVTjQ1dVdlUFpieC1HOUIxeGl6Ri02WEJnMk5VY0ZzUXRIX0llRDQyTE1rN09GdWp2ZThobFhuRGFWRzN1LUZpTll6empSd0xNZHJCMzdwbnRERF9mdDBTWWFtUHo1Rks4blJoMF9ET19ibG9IbzEmdD02MzY1MTExMDE4NjAwMDAwMDA/NTgxMDQ0ZAIDD2QWCAIBDw8WAh4EVGV4dAUJNS44LjEwLjQ0ZGQCAw8PFgIfAQUtQ0JQIElORFVTVFJJQSBCUkFTSUxFSVJBIERFIFBPTElVUkVUQU5PUyBMVERBZGQCBQ9kFghmD2QWAmYPFgIeBXN0eWxlBQtoZWlnaHQ6NXB4OxYCAgEPDxYCHgdWaXNpYmxlaGRkAgEPZBYCZg9kFgICAQ8WAh8DaGQCAg9kFgJmD2QWAgIDD2QWGAIBD2QWBGYPDxYEHghDc3NDbGFzcwUKbWVudVRpdHVsbx4EXyFTQgICZGQCAQ8PFgQfBAUIbWVudUl0ZW0fBQICFgIfAgUOZGlzcGxheTpibG9jazsWAgIDDw8WBB4JRm9udF9Cb2xkZx8FAoAQZGQCAg9kFgRmDw8WBB8EBQptZW51VGl0dWxvHwUCAmRkAgEPDxYEHwQFCG1lbnVJdGVtHwUCAhYCHwIFDWRpc3BsYXk6bm9uZTtkAgMPZBYEZg8PFgQfBAUKbWVudVRpdHVsbx8FAgJkZAIBDw8WBB8EBQhtZW51SXRlbR8FAgIWAh8CBQ1kaXNwbGF5Om5vbmU7ZAIED2QWBGYPDxYEHwQFCm1lbnVUaXR1bG8fBQICZGQCAQ8PFgQfBAUIbWVudUl0ZW0fBQICFgIfAgUNZGlzcGxheTpub25lO2QCBQ9kFgRmDw8WBB8EBQptZW51VGl0dWxvHwUCAmRkAgEPDxYEHwQFCG1lbnVJdGVtHwUCAhYCHwIFDWRpc3BsYXk6bm9uZTtkAgYPZBYEZg8PFgQfBAUKbWVudVRpdHVsbx8FAgJkZAIBDw8WBB8EBQhtZW51SXRlbR8FAgIWAh8CBQ1kaXNwbGF5Om5vbmU7ZAIHD2QWBGYPDxYEHwQFCm1lbnVUaXR1bG8fBQICZGQCAQ8PFgQfBAUIbWVudUl0ZW0fBQICFgIfAgUNZGlzcGxheTpub25lOxYCAg8PDxYCHgdFbmFibGVkaGRkAggPZBYEZg8PFgQfBAUKbWVudVRpdHVsbx8FAgJkZAIBDw8WBB8EBQhtZW51SXRlbR8FAgIWAh8CBQ1kaXNwbGF5Om5vbmU7ZAIJD2QWBGYPDxYEHwQFCm1lbnVUaXR1bG8fBQICZGQCAQ8PFgQfBAUIbWVudUl0ZW0fBQICFgIfAgUNZGlzcGxheTpub25lO2QCCg9kFgRmDw8WBB8EBQptZW51VGl0dWxvHwUCAmRkAgEPDxYEHwQFCG1lbnVJdGVtHwUCAhYCHwIFDWRpc3BsYXk6bm9uZTtkAgsPZBYEZg8PFgQfBAUKbWVudVRpdHVsbx8FAgJkZAIBDw8WBB8EBQhtZW51SXRlbR8FAgIWAh8CBQ1kaXNwbGF5Om5vbmU7ZAIMD2QWBGYPDxYEHwQFCm1lbnVUaXR1bG8fBQICZGQCAQ8PFgQfBAUIbWVudUl0ZW0fBQICFgIfAgUNZGlzcGxheTpub25lO2QCAw9kFgJmD2QWAgIBDw8WAh4ISW1hZ2VVcmwF3QEvU0RFL1dlYlJlc291cmNlLmF4ZD9kPUF4NVl4bFN5d2hveXN0ZmVRcjVmaUhHUGtzNEMtM0xmZV96MGVwbzBxemlMX3A3N1VkUUxDWTF2dDh0N19FZHdzb3AzeTI4akVkYTdJb0dza1BNNWx5YldiY2tHZkRDREdmeTZZUXVlZ2ZZT0dONzc1aTNrV2lHRlplcUw5b0d1dHlfU3R3QWRrLVowZXBDNDEtbDR4SE5QdHdKT3lqY1JZQWYyVXc2ajNMbVN0U0tPMCZ0PTYzNjcxMzI4MzI2MDAwMDAwMGRkAgYPZBYEAgEPZBYCAgEPZBYCZg9kFgICAQ8PFgIfAWVkZAIDDw8WAh4STGFzdEFjdGl2ZVRhYkluZGV4ZmQWDGYPZBYCAgEPZBYCAgEPD2QPFg5mAgECAgIDAgQCBQIGAgcCCAIJAgoCCwIMAg0WDhQrAAwFAUQFDklORF9FTUlTX0RBTkZFZGcFEVNpdHVhY2FvSW1wcmVzc2FvZGRkCyopU3lzdGVtLldlYi5VSS5XZWJDb250cm9scy5Ib3Jpem9udGFsQWxpZ24CZGRnFCsADAUHUmV0b3JubwUKUmV0b3Jub0VycGRnBQ9TaXR1YWNhb1JldG9ybm9kZGQLKwQCZGRnFCsADAUDU2l0BQ5JTkRfU1RBVFVTX05GRWRnBQhTaXR1YWNhb2RkZAsrBAJkZGcUKwAMBQpTaXR1YcOnw6NvBRNJTkRfU1RBVFVTX05GRV9ERVNDZGcFCFNpdHVhY2FvZGRkZGRkZxQrAAwFBlPDqXJpZQUHQl9TRVJJRWRnBQVTZXJpZWRkZAsrBANkZGcUKwAMBQdOw7ptZXJvBQVCX05ORmRnBQZOdW1lcm9kZGQLKwQDZGRnFCsADAUHRW1pc3NvcgUHQ19YTk9NRWRnBQtOb21lRW1pc3NvcmRkZGRkZGcUKwAMBQ1EZXN0aW5hdMOhcmlvBQdFX1hOT01FZGcFEE5vbWVEZXN0aW5hdGFyaW9kZGRkZGRnFCsADAUIRW1pc3PDo28FBkJfREVNSWRnBQtEYXRhRW1pc3Nhb2RkZGRkZGcUKwAMBQVUb3RhbAUFV19WTkZkZwUFVG90YWxkZGQLKwQDZGRnFCsADAUMQ05QSiBFbWlzc29yBQZDX0NOUEpkZwULQ25wakVtaXNzb3JkZGRkZGRnFCsADAUWQ05QSi9DUEYgRGVzdGluYXTDoXJpbwUKRV9DTlBKX0NQRmRnBRVEb2N1bWVudG9EZXN0aW5hdGFyaW9kZGRkZGRnFCsADAUMRGF0YSBlbnQvc2FpBQlCX0RTQUlFTlRkZwUQRGF0YUVudHJhZGFTYWlkYWRkZGRkZGcUKwAMBQxFbnZpbyBlLW1haWwFCkVudmlvRW1haWxkZAUKRW52aW9FbWFpbGRkZAsrBAJkZGdkAgEPZBYCZg9kFgICAQ8PZA8WC2YCAQICAgMCBAIFAgYCBwIIAgkCChYLFCsADAUHUmV0b3JubwUKUmV0b3Jub0VycGRnBQ9TaXR1YWNhb1JldG9ybm9kZGQLKwQCZBsAAAAAAABEQAEAAABnFCsADAUDU2l0BRVDT0RfU1RBVFVTX1JFU1BfU0VGQVpkZwUSQ29kU3RhdHVzUmVzcFNlZmF6ZGRkZGQbAAAAAAAANEABAAAAZxQrAAwFClNpdHVhw6fDo28FFURTQ19TVEFUVVNfUkVTUF9TRUZBWmRnBRJDb2RTdGF0dXNSZXNwU2VmYXpkZGRkZBsAAAAAAIBRQAEAAABnFCsADAUGU8OpcmllBRZOVU1fU0VSSUVfRE9DVE9fRklTQ0FMZGcFE051bVNlcmllRG9jdG9GaXNjYWxkZGQLKwQDZBsAAAAAAIBGQAEAAABnFCsADAUPTsO6bWVybyBpbmljaWFsBRVOVU1fRE9DVE9fRklTQ0FMX0lOSUNkZwUSTnVtRG9jdG9GaXNjYWxJbmljZGRkCysEA2QbAAAAAACAVkABAAAAZxQrAAwFDU7Dum1lcm8gZmluYWwFFk5VTV9ET0NUT19GSVNDQUxfRklOQUxkZwUTTnVtRG9jdG9GaXNjYWxGaW5hbGRkZAsrBANkGwAAAAAAQFVAAQAAAGcUKwAMBRBDTlBKL0NQRiBFbWlzc29yBRVOVU1fQ05QSl9FU1RBQl9HRVJET1JkZwUVRXN0YWJHZXJkb3IuRG9jdW1lbnRvZGRkZGQbAAAAAACAW0ABAAAAZxQrAAwFB0VtaXNzb3IFEE5PTV9FU1RBQl9HRVJET1JkZwUQRXN0YWJHZXJkb3IuTm9tZWRkZGRkZGcUKwAMBQNBbm8FDk5VTV9BTk9fSU5VVExaZGcFDE51bUFub0ludXRsemRkZAsrBANkGwAAAAAAAE5AAQAAAGcUKwAMBQREYXRhBRJEQVRfSE9SX1JFR19JTlVUTFpkZwUPRGF0SG9yUmVnSW51dGx6ZGRkZGQbAAAAAACAW0ABAAAAZxQrAAwFBk1vdGl2bwURRFNDX01PVElWT19JTlVUTFpkZwUPRHNjTW90aXZvSW51dGx6ZGRkZGRkZ2QCAg9kFgJmD2QWAgIBDw9kDxYMZgIBAgICAwIEAgUCBgIHAggCCQIKAgsWDBQrAAwFB1JldG9ybm8FClJldG9ybm9FcnBkZwUPU2l0dWFjYW9SZXRvcm5vZGRkCysEAmRkZxQrAAwFA1NpdAUVQ09EX1NUQVRVU19SRVNQX1NFRkFaZGQFEkNvZFN0YXR1c1Jlc3BTZWZhemRkZGRkZGcUKwAMBQpTaXR1YcOnw6NvBRVEU0NfU1RBVFVTX1JFU1BfU0VGQVpkZAUSQ29kU3RhdHVzUmVzcFNlZmF6ZGRkZGRkZxQrAAwFBlPDqXJpZQUHQl9TRVJJRWRnBQ9Ob3RhVmlzYW8uU2VyaWVkZGQLKwQDZGRnFCsADAUHTsO6bWVybwUFQl9OTkZkZwUQTm90YVZpc2FvLk51bWVyb2RkZAsrBANkZGcUKwAMBRBDTlBKL0NQRiBFbWlzc29yBQZDX0NOUEpkZwUgTm90YVZpc2FvLk9iamV0b0ZpbGlhbC5Eb2N1bWVudG9kZGRkZGRnFCsADAUHRW1pc3NvcgUHQ19YTk9NRWRnBRtOb3RhVmlzYW8uT2JqZXRvRmlsaWFsLk5vbWVkZGRkZGRnFCsADAUWQ05QSi9DUEYgRGVzdGluYXTDoXJpbwUKRV9DTlBKX0NQRmRnBR9Ob3RhVmlzYW8uRG9jdW1lbnRvRGVzdGluYXRhcmlvZGRkZGRkZxQrAAwFDURlc3RpbmF0w6FyaW8FB0VfWE5PTUVkZwUaTm90YVZpc2FvLk5vbWVEZXN0aW5hdGFyaW9kZGRkZGRnFCsADAUERGF0YQUSREFUX0hPUl9SRUdfQ0FOQ0VMZGcFD0RhdEhvclJlZ0NhbmNlbGRkZGRkZGcUKwAMBQZNb3Rpdm8FEURTQ19NT1RJVk9fQ0FOQ0VMZGcFD0RzY01vdGl2b0NhbmNlbGRkZGRkZGcUKwAMBQxFbnZpbyBlLW1haWwFCkVudmlvRW1haWxkZAUKRW52aW9FbWFpbGRkZAsrBAJkZGdkAgMPZBYCZg9kFgICAQ9kFgJmDw9kDxYLZgIBAgICAwIEAgUCBgIHAggCCQIKFgsUKwAMBQRJbXAuBRFJTkRfSU1QUkVTU0FPX0NDRWRnBR9DYXJ0YUNvcnJlY2FvLlNpdHVhY2FvSW1wcmVzc2FvZGRkCysEAmQbAAAAAAAAPkABAAAAZxQrAAwFB1JldG9ybm8FClJldG9ybm9FcnBkZwUuQ2FydGFDb3JyZWNhby5JbmZvcm1hY2FvRXZlbnRvLlNpdHVhY2FvUmV0b3Jub2RkZAsrBAJkGwAAAAAAAD5AAQAAAGcUKwAMBQNTaXQFDklORF9TVEFUVVNfQ0NFZGcFHENhcnRhQ29ycmVjYW8uQ29kaWdvU2l0dWFjYW9kZGQLKwQCZBsAAAAAAAA+QAEAAABnFCsADAUKU2l0dWHDp8OjbwUTSU5EX1NUQVRVU19DQ0VfREVTQ2RnBRxDYXJ0YUNvcnJlY2FvLkNvZGlnb1NpdHVhY2FvZGRkZGQbAAAAAAAAaUABAAAAZxQrAAwFBlPDqXJpZQUIU2VyaWVOZmVkZwUPTm90YVZpc2FvLlNlcmllZGRkCysEA2QbAAAAAAAAPkABAAAAZxQrAAwFB07Dum1lcm8FCU51bWVyb05mZWRnBRBOb3RhVmlzYW8uTnVtZXJvZGRkCysEA2QbAAAAAAAAPkABAAAAZxQrAAwFB0VtaXNzb3IFDE5PTUVfRU1JU1NPUmRnBRVOb3RhVmlzYW8uTm9tZUVtaXNzb3JkZGRkZGRnFCsADAULTnVtLiBFdmVudG8FDU5VTUVST19FVkVOVE9kZwU0Q2FydGFDb3JyZWNhby5JbmZvcm1hY2FvRXZlbnRvLk51bWVyb1NlcXVlbmNpYUV2ZW50b2RkZAsrBANkGwAAAAAAAD5AAQAAAGcUKwAMBQfDk3Jnw6NvBQVPUkdBT2RnBS5DYXJ0YUNvcnJlY2FvLkluZm9ybWFjYW9FdmVudG8uU2VxdWVuY2lhRXN0YWRvZGRkZGQbAAAAAAAAaUABAAAAZxQrAAwFBERhdGEFC0RBVEFfRVZFTlRPZGcFKUNhcnRhQ29ycmVjYW8uSW5mb3JtYWNhb0V2ZW50by5EYXRhRXZlbnRvZGRkCysEAWQbAAAAAAAATkABAAAAZxQrAAwFDEVudmlvIGUtbWFpbAUKRW52aW9FbWFpbGRkBQpFbnZpb0VtYWlsZGRkCysEAmQbAAAAAAAAPkABAAAAZ2QCBA9kFgJmD2QWAgIBD2QWAmYPDxYCHwlmZBYEZg9kFgICAQ9kFgICAQ9kFgICAQ8PZA8WCGYCAQICAgMCBAIFAgYCBxYIFCsADAUHUmV0b3JubwUPU2l0dWFjYW9SZXRvcm5vZGcFIEluZm9ybWFjYW9FdmVudG8uU2l0dWFjYW9SZXRvcm5vZGRkCysEAmQbAAAAAAAAREABAAAAZxQrAAwFClNpdHVhw6fDo28FCFNpdHVhY2FvZGcFCFNpdHVhY2FvZGRkCysEAmQbAAAAAAAANEABAAAAZxQrAAwFC0Rlc2NyacOnw6NvBRFEZXNjcmljYW9TaXR1YWNhb2RnBQhTaXR1YWNhb2RkZGRkZGcUKwAMBQZTw6lyaWUFCFNlcmllTmZlZGcFG0luZm9ybWFjYW9FdmVudG8uTm90YS5TZXJpZWRkZAsrBANkZGcUKwAMBQdOw7ptZXJvBQlOdW1lcm9OZmVkZwUfSW5mb3JtYWNhb0V2ZW50by5Ob3RhLk51bWVyb05mZWRkZAsrBANkZGcUKwAMBQpTZXF1w6puY2lhBRVOdW1lcm9TZXF1ZW5jaWFFdmVudG9kZwUmSW5mb3JtYWNhb0V2ZW50by5OdW1lcm9TZXF1ZW5jaWFFdmVudG9kZGQLKwQDZGRnFCsADAUOVGlwbyBkZSBldmVudG8FClRpcG9FdmVudG9kZwUdSW5mb3JtYWNhb0V2ZW50by5Db2RpZ29FdmVudG9kZGRkZGRnFCsADAUMRW52aW8gZS1tYWlsBQpFbnZpb0VtYWlsZGQFCkVudmlvRW1haWxkZGQLKwQCZBsAAAAAAAA+QAEAAABnZAIBD2QWAgIBD2QWAgIBD2QWAgIBDw9kDxYIZgIBAgICAwIEAgUCBgIHFggUKwAMBQdSZXRvcm5vBQ9TaXR1YWNhb1JldG9ybm9kZwUgSW5mb3JtYWNhb0V2ZW50by5TaXR1YWNhb1JldG9ybm9kZGQLKwQCZBsAAAAAAABEQAEAAABnFCsADAUKU2l0dWHDp8OjbwUIU2l0dWFjYW9kZwUIU2l0dWFjYW9kZGQLKwQCZBsAAAAAAAA0QAEAAABnFCsADAULRGVzY3Jpw6fDo28FEURlc2NyaWNhb1NpdHVhY2FvZGcFCFNpdHVhY2FvZGRkZGRkZxQrAAwFBlPDqXJpZQUIU2VyaWVOZmVkZwUbSW5mb3JtYWNhb0V2ZW50by5Ob3RhLlNlcmllZGRkCysEA2RkZxQrAAwFB07Dum1lcm8FCU51bWVyb05mZWRnBR9JbmZvcm1hY2FvRXZlbnRvLk5vdGEuTnVtZXJvTmZlZGRkCysEA2RkZxQrAAwFClNlcXXDqm5jaWEFFU51bWVyb1NlcXVlbmNpYUV2ZW50b2RnBSZJbmZvcm1hY2FvRXZlbnRvLk51bWVyb1NlcXVlbmNpYUV2ZW50b2RkZAsrBANkZGcUKwAMBQ5UaXBvIGRlIGV2ZW50bwUKVGlwb0V2ZW50b2RnBR1JbmZvcm1hY2FvRXZlbnRvLkNvZGlnb0V2ZW50b2RkZGRkZGcUKwAMBQxFbnZpbyBlLW1haWwFCkVudmlvRW1haWxkZAUKRW52aW9FbWFpbGRkZAsrBAJkGwAAAAAAAD5AAQAAAGdkAgUPZBYCZg9kFgICAQ9kFgJmDw8WBB4Xc29ydE9yZGVyQXNjZW5kaW5nSW1hZ2UFDC4vaW1nL3VwLmdpZh4Yc29ydE9yZGVyRGVzY2VuZGluZ0ltYWdlBQ4uL2ltZy9kb3duLmdpZg8WCGYCAQICAgMCBAIFAgYCBxYIPCsADAMABQEjCAsrBAILZxQrAAwFBUNoYXZlBQVDaGF2ZWRnBQVDaGF2ZWRkZGRkZGcUKwAMBQZTw6lyaWUFBVNlcmllZGcFDlNlcmllRG9jdW1lbnRvZGRkZGRkZBQrAAwFB07Dum1lcm8FBk51bWVyb2RnBQ9OdW1lcm9Eb2N1bWVudG9kZGRkZGRkFCsADAUHRW1pc3NvcgUHRW1pc3NvcmRnBQtOb21lRW1pc3NvcmRkZGRkZGQUKwAMBQxDTlBKIEVtaXNzb3IFC0NucGpFbWlzc29yZGcFDkNucGpDcGZFbWlzc29yZGRkZGRkZBQrAAwFCENyw610aWNhBRBEZXNjcmljYW9Dcml0aWNhZGcFCURlc2NyaWNhb2RkZGRkZGQUKwAMBQ1EYXRhIFJlZ2lzdHJvBQxEYXRhUmVnaXN0cm8FEGRkL01NL3l5eXkgSEg6bW1nBQhEYXRhSG9yYWRkZGRkZGdkGAMFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYLBSNjdGwwMCRNYWluQ29udGVudCR0Y3RBYmFzRW1pc3Nhb05mZQU2Y3RsMDAkTWFpbkNvbnRlbnQkdGN0QWJhc0VtaXNzYW9OZmUkdGFiTmZlJGJ0bkFqdWRhTmZlBVJjdGwwMCRNYWluQ29udGVudCR0Y3RBYmFzRW1pc3Nhb05mZSR0YWJOb3Rhc0ludXRpbGl6YWRhcyRidG5BanVkYU5vdGFzSW51dGlsaXphZGFzBU5jdGwwMCRNYWluQ29udGVudCR0Y3RBYmFzRW1pc3Nhb05mZSR0YWJOb3Rhc0NhbmNlbGFkYXMkYnRuQWp1ZGFOb3Rhc0NhbmNlbGFkYXMFW2N0bDAwJE1haW5Db250ZW50JHRjdEFiYXNFbWlzc2FvTmZlJHRhYkNhcnRhc0NvcnJlY2FvJGN0dUNhcnRhc0NvcnJlY2FvJGJ0bkFqdWRhUmVjZWJpbWVudG8FUGN0bDAwJE1haW5Db250ZW50JHRjdEFiYXNFbWlzc2FvTmZlJHRhYkNhcnRhc0NvcnJlY2FvJGN0dUNhcnRhc0NvcnJlY2FvJGJ0bkFqdWRhBWFjdGwwMCRNYWluQ29udGVudCR0Y3RBYmFzRW1pc3Nhb05mZSR0YWJQZWRpZG9zUHJvcnJvZ2FjYW8kY3R1UGVkaWRvc1Byb3Jyb2dhY2FvJHRjdEFiYXNFbWlzc2FvTmZlBZ0BY3RsMDAkTWFpbkNvbnRlbnQkdGN0QWJhc0VtaXNzYW9OZmUkdGFiUGVkaWRvc1Byb3Jyb2dhY2FvJGN0dVBlZGlkb3NQcm9ycm9nYWNhbyR0Y3RBYmFzRW1pc3Nhb05mZSR0YWJQZWRpZG9zJGN0dVBlZGlkb3NQcm9ycm9nYWNhbyRidG5BanVkYVBlZGlkb3NQcm9ycm9nYWNhbwW7AWN0bDAwJE1haW5Db250ZW50JHRjdEFiYXNFbWlzc2FvTmZlJHRhYlBlZGlkb3NQcm9ycm9nYWNhbyRjdHVQZWRpZG9zUHJvcnJvZ2FjYW8kdGN0QWJhc0VtaXNzYW9OZmUkdGFiQ2FuY2VsYW1lbnRvcyRjdHVQZWRpZG9zUHJvcnJvZ2FjYW9DYW5jZWxhbWVudG8kYnRuQWp1ZGFQZWRpZG9zUHJvcnJvZ2FjYW9DYW5jZWxhbWVudG8FTGN0bDAwJE1haW5Db250ZW50JHRjdEFiYXNFbWlzc2FvTmZlJHRhYkNyaXRpY2FzJGN0dUNyaXRpY2FzJGJ0bkFqdWRhQ3JpdGljYXMFTWN0bDAwJE1haW5Db250ZW50JHRjdEFiYXNFbWlzc2FvTmZlJHRhYkNyaXRpY2FzJGN0dUNyaXRpY2FzJGJ0bkZpbHRyb05mZUFqdWRhBSNjdGwwMCRNYWluQ29udGVudCR0Y3RBYmFzRW1pc3Nhb05mZQ8PZGZkBWFjdGwwMCRNYWluQ29udGVudCR0Y3RBYmFzRW1pc3Nhb05mZSR0YWJQZWRpZG9zUHJvcnJvZ2FjYW8kY3R1UGVkaWRvc1Byb3Jyb2dhY2FvJHRjdEFiYXNFbWlzc2FvTmZlDw9kZmSwrHkC1FVXXhtJGguPifc5urOxmQ==" */
/* src="/SDE/WebResource.axd?d=G_z6RI0azSIZ2n49Nk1anktqJfHI1rrVmc6_WzWZVMw4X3VdnfnhyAMVzAY09q29apSATkHhHYHsfoPxlDq2Mq-clOk1&amp;t=636283794560000000" */
/* src="/SDE/ScriptResource.axd?d=GZuwEaVOvbbWdhIPYEW2iXV706kRPa3GiaJu8HXrFo-6Dkpyvpw_mc90yZMYw-u19XjJoYxNmUJxy6oyY2r1Ei7PfTXYHJ_D_R5WJpvn6PEq4pTmFNPLO0gBhSW1K50hKayJPStEM8zP2Z1lo6eP3CkFkDQ1&amp;t=ffffffffcce8aaf2" */

app.controller('formControle', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {
        $rootScope.msg = "Seja bem vindo. Logue para ter acesso a todo conteúdo.";
        
        //Pessoas para Pagina
        $scope.carregarPessoa = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/pessoa/pessoa.json'}).then(function successCallback(responses) {
            $scope.pessoaPagina = responses.data;
            $rootScope.msgPessoa = "Carregado com sucesso !";
        }, function errorCallback(response) {
                    $rootScope.msgPessoa = "erro ao processar !";
                });
        };
        //Usuarios para Pagina
        $scope.carregarUsuario = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/usuario/usuario.json'}).then(function successCallback(responses) {
            $scope.usuarioPagina = responses.data;
            $rootScope.msgUsuario = "Carregado com sucesso !";
        }, function errorCallback(response) {
                    $rootScope.msgUsuario = "erro ao processar !";
                });
        };
        //Conteudo para Pagina
        $scope.carregarConteudo = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/conteudo/conteudo.json'}).then(function successCallback(response) {
                    $scope.conteudoPagina = response.data;
                    $rootScope.msgConteudo = "Carregado com sucesso !";
            }, function errorCallback(response) {
                    $rootScope.msgConteudo = "erro ao processar !";
                });            
        };
        //Curso para Pagina
        $scope.carregarCurso = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/curso/curso.json'}).then(function successCallback(response) {
                $scope.cursoPagina = response.data;
                $rootScope.msgCurso = "Carregado com sucesso !";
            }, function errorCallback(response) {
                $rootScope.msgCurso = "erro ao processar !";                
            });            
        };
        //Matricula para Pagina
        $scope.carregarMatricula = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/matricula/matricula.json'}).then(function sucessCallback(response) {
                $scope.matriculaPagina = response.data;
                $rootScope.msgMatricula = "Carregado com sucesso !";
            }, function errorCallback(response) {
                $rootScope.msgMatricula = "erro ao processar !";
            });
        };

        $scope.logar = function () {

            $http({
                    method:'GET',
                    url:'http.site.com/rest/usuario/usuario.json'}).then(function successCallback(responses) {
                angular.forEach(responses.data, function (value, key) {
                    if (value.userName == $scope.edtnome &&
                            value.senha == $scope.edtsenha) {
                        delete value.senha;
                        $scope.edtnome = '';
                        $scope.edtsenha = '';
                        $rootScope.usuarioLogado = value;
                        $location.path('/home');
                    }else{
                        $rootScope.msg = "Usuario não validado !";
                        $location.path('/home');
                    }
                })
            })

        };
        
        $scope.logout = function () {
                $rootScope.usuarioLogado = null;
                $location.path('/home');
            };


    }]);

    app.run(function ($rootScope, $location) {           
            var rotasBloqueadasUsuariosNaoLogados = ['/conteudo','/pessoas','/usuarios'];          
            $rootScope.$on('$locationChangeStart', function () { 
                if ($rootScope.usuarioLogado == null && rotasBloqueadasUsuariosNaoLogados.indexOf($location.path()) != -1) {
                    $location.path('/home');
                } ;
            });
        });


